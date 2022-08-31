// $mod é o resto

// EXemplo:
// { _id: 1, item: "abc123", qty: 0 },
// { _id: 2, item: "xyz123", qty: 5 },
// { _id: 3, item: "ijk123", qty: 12 }

db.inventory.find({ qty: { $mod: [4, 0] } });

// 0 dividido por 4 é 0 com resto 0.
// 5 dividido por 4 é 1 com resto 1.
// 12 dividido por 4 é 3 com resto 0.

// Resultado:
// Então, os qty que tem resto 0 são 0 e 12, só retornará os documentos com esses qty.