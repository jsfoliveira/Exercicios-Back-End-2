// operador $mul para multiplicar os valores dos campos price e qty
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);
// Você pode utilizar o $mul em um campo que não exista no documento. Nesse caso, o operador criará o campo e será atribuído a ele o valor zero do mesmo tipo numérico do multiplicador.