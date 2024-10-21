import Person from "./Person";

class Employee extends Person {
  private _inn;
  private _number;
  private _snils;

  constructor(name, surname, age, inn, number, snils) {
    super(name, surname, age);
    this.inn = inn;
    this.number = number;
    this.snils = snils;
  }

  greeting() {
    console.log(`Привет! Я работник и меня зовут ${this.name}`);
  }

  get inn() {
    return this._inn;
  }

  set inn(val: any) {
    this._inn = val;
  }

  get number() {
    return this._number;
  }

  set number(val: any) {
    this._number = val;
  }

  get snils() {
    return this._snils;
  }

  set snils(val: any) {
    this._snils = val;
  }
}

export default Employee;
