import Person from "./Person";
import PhysicalPerson from "./PhysicalPerson";

export default class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() {
    return this.lastId++;
  }
  get id() {
    return this._id;
  }
  // o método get retorna o atributo. usamos get quando queremos acessar, “pegar” alguns atributos da classe,
  get name() {
    return this._name;
  }
  // método set não retorna nada. utilizamo set quando queremos modificar os valores de um atributo da classe de maneira protegida
  // public set name_1(value) {
  //   this._name = value;
  // }
  get cnpj() {
    return this._cnpj;
  }
  showIdentification() {
    console.log(this.id, this._cnpj);
  }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

/*
Saída:
 123456789
 987654321
 834729384723
*/