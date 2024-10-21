import Employee from "./Employee";

class Developer extends Employee {
  private _lvl;

  constructor(name, surname, age, inn, number, snils, lvl) {
    super(name, surname, age, inn, number, snils);
    this.lvl = lvl;
  }

  greeting() {
    console.log(`Привет! Я разработчик и меня зовут ${this.name}`);
  }

  get lvl() {
    return this._lvl;
  }

  set lvl(val: "Junior" | "Middle" | "Senor") {
    this._lvl = val;
  }
}
export default Developer;
