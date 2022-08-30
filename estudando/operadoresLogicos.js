// not nega a operação
// nesse caso, a consulta seleciona todos os documentos na coleção inventory em que o valor do atributo price é menor ou igual a 1.99(gt pega quem é maior que, sendo assim a sua negação é menor ou igual)
db.inventory.find({ price: { $not: { $gt: 1.99 } } })

// or é ou um ou outro
// O operador $or executa a operação lógica OU em um array de uma ou mais expressões e seleciona os documentos que satisfaçam ao menos uma das expressões(tem que ter pelo menos uma verdadeira pra ser verdadeiro)
// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é menor do que 20 ou o valor do atributo price é igual a 10.
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })

// Operador $nor
// o ou só vai ser falso se todos forem falso

// Operador $and
// pra ser verdadeiro precisa que todos sejam verdadeiras
// Se alguma expressão for avaliada como falsa, o MongoDB não avaliará as expressões restantes, pois o resultado final sempre será falso independentemente do resultado delas

// múltiplos operadores
// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do campo price é maior que 0.99 e menor que 1.99, E o valor do atributo sale é igual a true, OU o valor do atributo qty é menor do que 20. Ou seja, essa expressão é equivalente a (price > 0.99 E price < 1.99) (onde o E está implícito na vírgula aqui { $gt: 0.99, $lt: 1.99 }) E (sale = true OU qty < 20).
db.inventory.find({
  $and: [
      { price: { $gt: 0.99, $lt: 1.99 } },
      {
          $or: [
              { sale : true },
              { qty : { $lt : 20 } }
          ]
      }
  ]
})

// Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa consulta também deve retornar restaurantes que não possuem o campo de avaliação.
db.restaurants.countDocuments({
  $and: [
    { rating:
      { 
        $not: { $lte: 5 }
      }
    }
  ]
})

// Selecione e faça a contagem dos restaurantes em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.
db.restaurants.countDocuments({
  $or: [
      { 
        borough: Brooklyn 
      },
      {
        rating: {$gte:6}
      }
  ]
})

// Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.
db.restaurants.countDocuments({
  $and: [
      { borough: { $in:[ "Queens", "Staten Island", "Brooklyn"]} },
      {
        rating: {$gt:4}
      }
  ]
})

// Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.
db.restaurants.countDocuments({
  $nor: [
    { 
      rating:{ $eq: 1 }
    },
    {
      cuisine: "American"
    }
  ]
});

// Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, E esteja localizado no bairro Brooklyn OU não possuem culinária do tipo Delicatessen.
db.restaurants.countDocuments({
  $and: [
    {
      $or: [
        {rating: {$gt: 6, $lt: 10 }}
      ]
    },
    {
      $or: [
        {borough: 'Brooklyn'},
        {cuisine: { $ne: 'Delicatessen' }}
      ]
    }
  ]
});