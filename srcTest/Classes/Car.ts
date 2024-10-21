class Wheel {
  drive() {
    console.log("круть-круть");
  }
}

class Engine {
  drive() {
    console.log("врум-врум");
  }
}

class Freshener {}

class Car {
  engine: Engine;
  wheels: Wheel[];
  freshener: Freshener;

  constructor(freshener) {
    // агрегация
    this.freshener = freshener;
    // композиция
    this.engine = new Engine();
    this.wheels = [];
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
    this.wheels.push(new Wheel());
  }

  drive() {
    this.engine.drive();
    this.wheels.forEach((wheel) => wheel.drive());
  }
}

export { Car, Freshener };
