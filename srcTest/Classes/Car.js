"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Freshener = exports.Car = void 0;
var Wheel = /** @class */ (function () {
    function Wheel() {
    }
    Wheel.prototype.drive = function () {
        console.log("круть-круть");
    };
    return Wheel;
}());
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.drive = function () {
        console.log("врум-врум");
    };
    return Engine;
}());
var Freshener = /** @class */ (function () {
    function Freshener() {
    }
    return Freshener;
}());
exports.Freshener = Freshener;
var Car = /** @class */ (function () {
    function Car(freshener) {
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
    Car.prototype.drive = function () {
        this.engine.drive();
        this.wheels.forEach(function (wheel) { return wheel.drive(); });
    };
    return Car;
}());
exports.Car = Car;
