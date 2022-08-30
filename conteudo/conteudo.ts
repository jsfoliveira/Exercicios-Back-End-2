// Iniciando o mongo
// $sudo service mongod start

// Entra no mongo
//$mongo

// Dentro do mongo
// mostrar todos bancos de dado que tenho e suas configurações
// $show dbs
// criar banco de dados
// $use nome-do-banco
// quero ver meu banco de dados
// $db
// criar coleções e inserir 1 valor nela
// $db.nome-da-colecao.insertOne({ chave: valor })
// se aparecer isso, quer dizer que foi criado corretamente
// "acknowledged" : true,
// se aparecer isso, pq o id foi gerado automaticamente. pode gerar manualmente, é só colocar _id:valor 
// "insertedId" : ObjectId("630d06a07106eedeb886b290")
// para ver a coleção criada
// $db.nome-da-colecao.find();
