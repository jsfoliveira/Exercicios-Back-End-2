// Crie uma classe chamada Tv, com os atributos:
class Tv {

  // brand: marca da TV;
  // size: tamanho em polegadas;
  // resolution: resolução da tela;
  // connections: conexões disponíveis(HDMI, Ethernet, etc.);
  // connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo?: string;
  
    constructor(brand: string, size: number, resolution: string, connections: string[]) {
      this.brand = brand;
      this.size = size;
      this.resolution = resolution;
      this.connections = connections;
    }
  
    // Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.
    turnOn():void {
      console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections},`);
      
    }
  }
  
  // Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.
  const t1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
  
  t1.turnOn();
  