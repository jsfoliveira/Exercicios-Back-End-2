// seleciona todos os documentos da coleção inventory em que o atributo qty existe E seu valor é diferente de 5 e 15.
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })