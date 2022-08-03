class Person {
  // atributos
  name: string;
  height: number;
  weight: number;

  // constructor inicializa os atributos com os valores que esão externos da classe.
  // método constructor
  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    // abribuo valores aos atributos do objeto
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

// criando os objetos
const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);

// acesso aos atributos
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);

// acesso aos métodos
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/