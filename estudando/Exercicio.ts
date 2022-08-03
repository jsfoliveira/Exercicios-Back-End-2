// criei a class
class Student {

// definição dos atributos
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _worksGrades: number[] = Array();

// método (ação) constructor define como o atributo inicia
  constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    // os de baixo não podem ter underline pq eu quero que ele pegue os valores de baixo
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades
  }

  // cria o get set de cada atributo. seleciona todo o atributo, aperta no balão azul e seleciona o generate get e set. 
  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  // get e set do name
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // get e set do examsGrades
  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    // validar 4 notas de prova. precisa fazer um if e atribuir um valor inicial.
    if(value.length !== 4){
      throw new Error('Tem que ter pelo menos 4 notas');
    };
    this._examsGrades = value;
  }

  // get e set do worksGrades
  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    if(value.length !== 2){
      throw new Error('Tem que ter pelo menos 2 notas');
    };
    this._worksGrades = value;
  }
}

// criar um estudante, passando valores
const student1 = new Student('1234', 'Gustavo', [1,2,3,4], [5,6]);
console.log(student1);

const student2 = new Student('5678', 'João', [1,2,3,4], [5,6]);
console.log(student2);
