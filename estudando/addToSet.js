// Faz a mesma coisa do push, só que ele não adiciona quando tem valores duplicados, ou seja, quer adicionar algo que já existe
// Se o inventory tiver camera, o array não terá mudança
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } },
);

// Quando associado a $each, o comando permite adicionar múltiplos valores
db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);