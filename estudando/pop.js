// Passando o valor -1 ao operador $pop você removerá o primeiro elemento. Já ao passar o valor 1, você removerá o último elemento do array
db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });