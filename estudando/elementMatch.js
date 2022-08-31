// O operador $elemMatch seleciona os documentos que contêm um campo do tipo array com pelo menos um elemento que satisfaça todos os critérios de seleção especificados. Ou seja, com esse operador você pode especificar várias queries para um mesmo array.

// exemplo
// { _id: 1, results: [82, 85, 88] },
// { _id: 2, results: [75, 88, 89] }

// com esse comando, vai retornar só o _id:1, pq nele tem um elemento que satisfaz as duas condições. Tem que setisfazer mais que uma condição
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);