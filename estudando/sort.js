// sort ordena
// tem que vir acompanhado do find
// 1 ordena de forma crescente
// -1 ordena de forma decrescente

// vai procurar todos os value e name e ordenar de forma decrescente e crescente, respectivamente

// db.example.find({}, { value, name }).sort({ value: -1 }, { name: 1 })

// Ordene alfabeticamente os restaurantes pelo nome (atributo name).
db.example.find().sort( {"name": 1});

// Ordene os restaurantes de forma decrescente baseado nas avaliações.
db.example.find().sort( {"rating": -1});