// Trazer filmes onde o diretor seja Quentin Tarantino ou a avaliação bom esteja entre 5 e 10
db.filmes.find({
  $or: [
    {
      diretor:'Quentin Tarantino'
    },
    {
      'avaliacao.bom': {
        $lte:5,
        $gte:10,
      }
    }
  ]
});

// trazer os filmes do ano 2001, 1968, 1995
db.filmes.find({
  ano: {
    $in:[2001,1968,1995]
  }
});

// trazer os filmes que não sejam dos anos 2013 e 2008
db.filmes.find({
  ano: {
    $nin:[2013, 2008]
  }
});
// OU
db.filmes.find({
  ano: {
    $not: {
      $in:[2013, 2008]
    }
  }
});
// deletar todos os filmes do ano de 2001
db.filmes.deleteMany({
  ano:
    2001
});