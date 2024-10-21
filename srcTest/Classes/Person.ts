class Person {
  private _name;
  private _surname;
  private _age;

  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  greeting() {
    console.log(`Привет! Я человек и меня зовут ${this.name}`);
  }

  get name() {
    return this._name;
  }

  set name(val: any) {
    this._name = val;
  }

  get surname() {
    return this._surname;
  }

  set surname(val: any) {
    this._surname = val;
  }

  get age() {
    return this._age;
  }

  set age(val: any) {
    if (val < 0) {
      this._age = 0;
    } else {
      this._age = val;
    }
  }
}

export default Person;
