// iniciando o express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// Conexão com o banco de dados
const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient;
const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true })

// Conectando o back-end com o banco de dados
MongoClient.connect(uri, (err, client) =>{
  if (err) return console.log(err)
  db = client.db('Crud0')

  app.listen(3000, () =>{
    console.log('Server running')
  }) 
})

app.use(bodyParser.urlencoded({ extended: true}))

app.set('view engine', 'ejs')
// iniciando com a página index
app.get('/', (req, res) =>{
  res.render('index.ejs')
})

app.get('/', (req, res) => {
    var cursor = db.collection('data').find()
})
// Pegando os resultados já cadastrados
app.get('/show', (req, res) =>{
    db.collection('data').find().toArray((err, results) =>{
      if (err) return console.log(err)
      res.render('show.ejs',{ data: results})
    })
})
// Salvando no banco de dados
app.post('/show', (req, res) =>{
  db.collection('data').save(req.body, (err, result) =>{
    if (err) return console.log(err)

    console.log('salvo no bd')
    res.redirect('/show')
  })
})
// Editando os cadastros
app.route('/edit/:id')
.get((req, res) =>{
  var id = req.params.id

  db.collection('data').find(ObjectId(id)).toArray((err, results) =>{
    if(err) return res.send(err)
    res.render('edit.ejs', {data: results })
  })
})
// Atualizando os dados no banco
.post((req, res) =>{
  var id = req.params.id
  var name = req.body.name
  var cpf = req.body.cpf
  var telefone = req.body.telefone
  var escolaridade = req.body.escoaridade

  db.collection('data').updateOne({_id: ObjectId(id)}, {
    $set: {
      name: name,
      cpf: cpf,
      telefone: telefone,
      escolaridade: escolaridade
    }
  }, (err, results) => {
    if (err) return res.send(err)
    res.redirect('/show')
    console.log('Atualizado no bd')
  })
})
// Deletando os dados do banco
app.route('/delete/:id')
.get((req, res) => {
  var id = req.params.id
  db.collection('data').deleteOne({_id: ObjectId(id)}, (err, results) => {
    if (err) return res.send(500, err)
    console.log('Deletado do bd')
    res.redirect('/show')
  })
})