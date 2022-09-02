// Esse comando vai adicionar a coleção supplies o elemento item
use ("sales");
db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);

// Para adicionar mais de um elemento, precisa colocar o each
// O modificador $sort para ordenar todos os elementos alterados no array items pelo campo quantity em ordem decrescente
// E o modificador $slice para manter apenas os dois primeiros elementos ordenados no array items.
db.supplies.updateOne(
  {},
  {
    $push: {
      items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
        $sort: { quantity: -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
);