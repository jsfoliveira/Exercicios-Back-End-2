// find() serve pra encontrar algo
// Esse método recebe dois parâmetros: db.collection.find(query, projection)
// os dois parâmetros são opcionais
// para encontrar a collection completa basta: db.collection.find({}); ou db.collection.find();

// exemplo
// db.movies.findOne(
//   { "title" : "Forrest Gump" },
//   { "title" : 1, "imdb_rating" : 1, "_id": 0 }
// )
// eu quero encontrar um título que seja Forrest Gump
// no segundo objeto eu mostro o que quero que inclua e exclua
// 1 ou true para incluir um campo nos documentos retornados;
// 0 ou false para excluir um campo;
// o "_id": 0  é só pra não ver o id sendo retornado na resposta

// retornar todos os name da coleção
//db.colecao.find({}, { name: 1 })