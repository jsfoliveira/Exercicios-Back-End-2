// O exemplo abaixo remove o primeiro documento da coleção inventory em que o atributo status é igual a D:
db.inventory.deleteOne({ status: "D" })

// O exemplo abaixo remove todos os documentos da coleção inventory em que o atributo status é igual a A:
db.inventory.deleteMany({ status : "A" })

// Para remover todos os documentos da coleção, basta não passar nenhum parâmetro para o método deleteMany():
db.inventory.deleteMany({})

// Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.
db.restaurants.deleteOne({cuisine: ['Ice Cream', 'Gelato', 'Yogurt', 'Ices']})

// Remova todos os restaurantes que possuem culinária do tipo American.
db.inventory.deleteMany({cuisine:'American'})