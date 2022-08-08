// Crie uma interface Logger.
// Logger deve possuir um método log, que recebe um parâmetro do tipo string e não retorna nada (void).
interface Logger {
  log(param:string): void;
}

// Crie uma classe ConsoleLogger que implementa Logger. Você deve imaginar como o método log deve ser implementado, né? 😁.
class ConsoleLogger implements Logger {
  log(param:string):void {
    console.log(param);
  }
}

// Crie uma classe ConsoleLogger2 igual à classe anterior, apenas a título de exemplo.
// No console.log dentro do método log, diferencie o ConsoleLogger2 do ConsoleLogger.
class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('Logger2:' + param);
  }
}

// Crie uma interface _Database_.
interface Database {
  // _Database_ deve possuir um atributo do tipo `Logger`.
  logger: Logger;
  // _Database_ deve possuir um método `save`, que recebe dois parâmetros, `key` e `value`, ambos _strings_, e não retorna nada (_void_).
  save(key: string, value: string): void;
}

// Crie uma classe ExampleDatabase que implementa Database.
// ExampleDatabase deve receber o Logger como parâmetro do construtor, e possuir como valor padrão um ConsoleLogger.
class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()){}

// Dentro do método save, chame a função log do Logger passado para o database para fazer o log dos parâmetros passados para a save.
  save(key: string, value: string): void {
   this.logger.log(`a chave é ${key} e o valor é ${value}`);
  }
}

// Crie um objeto de cada um dos Loggers.
// Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum.
const logger1= new ConsoleLogger();

// Utilize todos eles para salvar um conteúdo fictício.
const database1 = new ExampleDatabase(logger1);
database1.save('chave 1', 'valor 1');