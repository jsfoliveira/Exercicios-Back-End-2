// $regex fornece poderes das expressões regulares (regular expressions) para seleção de strings

// Exemplo
// { _id: 100, sku: "abc123", description: "Single line description." },
// { _id: 101, sku: "abc789", description: "First line\nSecond line" },
// { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
// { _id: 103, sku: "xyz789", description: "Multiple\nline description" }

// Seleciona todos os documentos em que o campo sku "termine" com "789"
db.products.find({ sku: { $regex: /789$/ } });

// O caractere i ao lado da expressão indica a opção case-insensitive
//Para ignorar letras minúsculas ou maiúsculas
db.products.find({ sku: { $regex: /^ABC/i } });