// Essa query retornará somente os documentos em que o array tags seja exatamente igual ao passado como parâmetro no filtro, ou seja, contenha apenas esses dois elementos, na mesma ordem.
db.inventory.find({ tags: ["red", "blank"] });

// Já a segunda analisará o mesmo array, independentemente da existência de outros valores ou a ordem em que os elementos estejam.
db.inventory.find({ tags: { $all: ["red", "blank"] } });
// mesma coisa que:
db.inventory.find(
  {
    $and: [
      { tags: "ssl" },
      { tags: "security" }
    ]
  }
);

