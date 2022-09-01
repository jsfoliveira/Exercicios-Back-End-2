// Com o operador $inc você pode incrementar ou decrementar valores em um campo específico, utilizando tanto valores positivos quanto negativos.
db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);
// vai diminuir 2 em quantity e aumentar 1 em metrics.orders