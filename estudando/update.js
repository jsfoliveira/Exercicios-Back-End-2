// O primeiro deles é o filtro. Nesse caso, um filtro simples de igualdade, mas outros operadores podem ser utilizados aqui;
// O segundo é a operação de update em si. Nesse caso, foi utilizado o operador de atualização $set para alterar o valor do campo size.uom para cm e o valor do campo status para P.
db.inventory.updateOne(
  // se esse primeiro parêntese estiver vazio, vai ser alterado o primeiro elemento do array
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

// O método db.colecao.updateMany() permite que vários documentos que satisfaçam o critério de filtro sejam alterados de uma única vez.
// Com o parâmetro de filtro vazio { }, o primeiro parêntese, o resultado é a atualização de todos os documentos presentes em colecao. 
