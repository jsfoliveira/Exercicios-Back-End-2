// ts-node indexed.ts
// polimorfismo(sobrescrita do método): coisas diferentes acontecem com a mesma função
class Animal {
  public name: string
  constructor(name: string) {
    this.name = name;
  }
  move() {
    console.log(`${this.name} está se movendo.`);
  }
}

class Bird extends Animal {
  move() {
    console.log(`${this.name} está voando.`);
  }
}
class Mammal extends Animal {
  move() {
    console.log(`${this.name} está andando.`);
  }
}

// instanciar
const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

// todo animal é do tipo Animal
const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está voando.
Tatu está andando.
*/