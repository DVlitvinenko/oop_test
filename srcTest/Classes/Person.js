"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this.name));
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (val) {
            this._surname = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (val) {
            if (val < 0) {
                this._age = 0;
            }
            else {
                this._age = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
