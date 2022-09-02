// Array Filter possibilita alterar apenas um valor que está dentro de um array de objetos
use("cinema");
db.recipes.insertMany([
  {
    title: "Panqueca Simples",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 4 },
      { name: "Leite", quantity: 1 },
    ],
  },
  {
    title: "Bolo de Cenoura",
    ingredients: [
      { name: "Farinha", quantity: 2},
      { name: "Oleo", quantity: 1, unit: "xícara" },
      { name: "Ovo", quantity: 3},
      { name: "Cenoura", quantity: 3},
      { name: "Fermento", quantity: 1},
    ],
  },
]);

// Na Panqueca Simples, crie no ingredients[1] uma chave unit com valor xícara
use("cinema");
db.recipes.updateOne( { title: "Panqueca Simples" }, { $set: { "ingredients.1.unit": "xícara" } } );

// Alterada dinamicamente todas as receitas que usam farinha para usarem farinha integral
use("cinema");
db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set : {
      "ingredients.$[elemento].name": "Farinha Integral",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha" } ] },
);

// Adicionada "xícara" ao campo unit do objeto com name igual a "Farinha Integral"
// ingredients.$[elemento].unit é quando não sabe a posição do elemento
db.recipes.updateOne(
  { title: "Panqueca Simples" },
  {
    $set : {
      "ingredients.$[elemento].unit": "xícara",
    },
  },
  { arrayFilters: [ { "elemento.name": "Farinha Integral" } ] },
);