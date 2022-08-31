// $expr permite comprar campos

// Exemplo:
// { _id: 1, category: "food", budget: 400, spent: 450 },
// { _id: 2, category: "drinks", budget: 100, spent: 150 },
// { _id: 3, category: "clothes", budget: 100, spent: 50 },
// { _id: 4, category: "misc", budget: 500, spent: 300 },
// { _id: 5, category: "travel", budget: 200, spent: 650 }

// O comando vai procurar a expressão que tenha spent maior que budget
db.monthlyBudget.find(
  {
    $expr: { $gt: [ "$spent", "$budget" ] }
  }
);

// Vai retornar:
// { "_id" : 1, "category" : "food", "budget" : 400, "spent" : 450 }
// { "_id" : 2, "category" : "drinks", "budget" : 100, "spent" : 150 }
// { "_id" : 5, "category" : "travel", "budget" : 200, "spent" : 650 }