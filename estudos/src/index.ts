// Crie uma interface chamada MyInterface.
// MyInterface deve possuir um atributo myNumber do tipo number.
// MyInterface deve possuir um método myFunc, que recebe um parâmetro myParam do tipo number e retorna uma string.
interface MyInterface {
  myNumber: number,

  myFunc(myParam: number): string;
}

// Crie uma classe MyClass que implementa MyInterface.
// Faça o atributo myNumber ser inicializado diretamente nos parâmetros do construtor da MyClass.
class MyClass implements MyInterface {
  constructor( public myNumber: number) {
  }

// Faça o método myFunc somar o myNumber com o myParam e retornar uma string qualquer que contenha a soma.
  myFunc(myParam: number): string {
    const soma = myParam + this.myNumber;
    return `A soma é ${soma}`;
  }
}

// Crie um objeto da classe MyClass e o utilize acessando myNumber e chamando myFunc.
const objeto = new MyClass(2);
console.log(objeto.myNumber);
console.log(objeto.myFunc(4));
