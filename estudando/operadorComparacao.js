//  qty que tem o valor menor que 20
db.inventory.find({ qty: { $lt: 20 } })

//  qty que tem o valor menor ou igual a 20
db.inventory.find({ qty: { $lte: 20 } })

//  qty que tem o valor maior que 20
db.inventory.find({ qty: { $gt: 20 } })

//  qty que tem o valor maior ou igual a 20
db.inventory.find({ qty: { $gte: 20 } })

//  qty que tem o valor igual a 20
db.inventory.find({ qty: { $eq: 20 } })
// ou
db.inventory.find({ qty: 20 })

//  qty que tem o valor NÃO igual a 20(diferente)
db.inventory.find({ qty: { $ne: 20 } })

// buscar quais documenos que tem atributos iguais aos que tem no array
db.inventory.find({ qty: { $in: [ 5, 15 ] } })
// buscar quais documenos que NÃO tem atributos iguais aos que tem no array
db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )

// Selecione e faça a contagem dos restaurantes presentes nos bairros Queens, Staten Island e Bronx. (utilizando o atributo borough)
db.restaurants.countDocuments({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } });
// Selecione e faça a contagem dos restaurantes que não possuem culinária do tipo American. (utilizando o atributo cuisine)
db.restaurants.countDocuments({ cuisine: { $nin: ["American"] } });
// Selecione e faça a contagem dos restaurantes que possuem avaliação maior ou igual a 8. (utilizando o atributo rating)
db.restaurants.countDocuments({ rating: { $gte: 8 } });
// Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4.
db.restaurants.countDocuments({ rating: { $lt: 4 } });
// Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5, 6 e 7.
db.restaurants.countDocuments({ rating: { $nin: [5,6,7] } });