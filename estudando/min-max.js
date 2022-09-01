// Exemplo
[
  { _id: 1, campo: 25 },
  { _id: 2, campo: 50 },
  { _id: 3, campo: 100 }
]
db.collection.updateMany({}, { $max: { campo: 75 } });
// esse comando vai os valores menores que 75 definí-los como 75, ficando assim:
[
  { _id: 1, campo: 75 },
  { _id: 2, campo: 75 },
  { _id: 3, campo: 100 }
]

db.collection.updateMany({}, { $min: { campo: 42 } });
// esse comando vai pegar todos os valores maiores que 42 e definí-los como 42, ficando assim:
[
  { _id: 1, campo: 42 },
  { _id: 2, campo: 42 },
  { _id: 3, campo: 42 }
]