"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Employee = /** @class */ (function (_super) {
  __extends(Employee, _super);
  function Employee(name, surname, age, inn, number, snils) {
    var _this = _super.call(this, name, surname, age) || this;
    _this.inn = inn;
    _this.number = number;
    _this.snils = snils;
    return _this;
  }
  Employee.prototype.greeting = function () {
    console.log(
      "\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(
        this.name
      )
    );
  };
  Object.defineProperty(Employee.prototype, "inn", {
    get: function () {
      return this._inn;
    },
    set: function (val) {
      this._inn = val;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Employee.prototype, "number", {
    get: function () {
      return this._number;
    },
    set: function (val) {
      this._number = val;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Employee.prototype, "snils", {
    get: function () {
      return this._snils;
    },
    set: function (val) {
      this._snils = val;
    },
    enumerable: false,
    configurable: true,
  });
  return Employee;
})(Person_1.default);
exports.default = Employee;
