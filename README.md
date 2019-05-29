# Crud
Teste prático para seleção de estágio

Desenvolvi este crud com Node.js para a estrutura em back-end, utilizando mongodb como banco de dados. 
No front-end, utilizei JavaScript.

O arquivo principal é o server.js. Ele é responsável pela estrutura de back-end da aplicação, onde está instanciado o banco
de dados e os comandos de manipulação dos dados. É nele também que será iniciado o servidor local

Utilizei o Mongodb no banco de dados.

O index.ejs é o HTML da página principal, onde será inserido os dados pelo usuário e submetido ao banco.
Depois de submetido os dados, a aplicação é direcionada a página show(show.ejs) que irá mostrar todos os dados inseridos pelo usuário.
Na mesma página, o usuário terá a opção de editar ou excluir os registros inseridos. Caso deseje editar algúm registro, o usuário é direcionado a outra página que permitirá a edição do contato registrado.

Para iniciar a aplicação, é necessário baixar todos os arquivos contidos na pasta crud. Após o download, acesse a pasta via terminal e em seguida, para iniciar o serviço, digite no próprio terminal o comando "node server.js", isso irá iniciar o servidor local da aplicação com node. Em seguida, abra o navegador e digite "localhost:3000" para abrir a página web da aplicação.

Na página inicial está todos os campos para registrar um contato e nenhum campo pode ser submetido vazio. Após o preenchimento, clique no botão 'submit' que irá adicionar no banco de dados o contato e redirecionará o usuário para a página com os contatos cadastrados. Também na página inicial, tem a opção de ir direto para a página com a tabela de registros.

Na página de registros, o usuário tem a opção de voltar para a página de cadastramento ao clicar no botão 'novo' e as opções de editar ou deletar algum dos seus registros. Caso clique em deletar, apenas o contato selecionado será excluido. Caso deseje editar, o usuário será direcionado a página de edição, onde poderá editar qualquer dado de seu registro. Ao terminar a edição do contato, para salvar as alterações, o usuário deve clicar no botão editar. Caso não deseje fazer nenhuma edição, basta clicar em voltar e retornará para os seus registros.
