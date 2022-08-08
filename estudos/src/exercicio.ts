// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e a data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo 3 caracteres
class Person {

  constructor(private _name: string , private _birthDate: Date) {
  this.name = _name;
  this.birthDate = _birthDate;
}

  private validateName(value: string): void {
  if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
}

private validateBirthDate(value: Date): void {
  if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
}

get name(): string {
  return this._name;
}

set name(value: string) {
  this.validateName(value);
  this._name = value;
}


get birthDate(): Date {
  return this._birthDate;
}

set birthDate(value:Date) {
  this.validateBirthDate(value);
  this._birthDate = value;
}


}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
console.log(maria);