// Size vai retornar o tamanho de um array especificado

// Exemplo
// { _id: 1, tags: ["red", "green"] },
// { _id: 2, tags: ["apple", "lime"] },
// { _id: 3, tags: "fruit" },
// { _id: 4, tags: ["orange", "lemon", "grapefruit"] }

// Ao executar a query abaixo, apenas os documentos com o _id igual 1 e 2 serão retornados, pois seus campos tags são arrays e contêm exatamente 2 elementos:
db.products.find(
  { tags: { $size: 2 } }
);

/// Dentro do size, não é possível usar operações de comparação como $gt, pois só é possível usar valores numéricos.