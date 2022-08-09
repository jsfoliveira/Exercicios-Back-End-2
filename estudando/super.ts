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
    // chamando super, vc chama o método que está na superclass
    super.move(); // Papagaio está se movendo.
    console.log(`${this.name} está voando.`); // Papagaio está voando.
  }
}
class Mammal extends Animal {
  move() {
    console.log(`${this.name} está andando.`);
  }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/