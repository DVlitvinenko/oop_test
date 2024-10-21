"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, surname, age, inn, number, snils, lvl) {
        var _this = _super.call(this, name, surname, age, inn, number, snils) || this;
        _this.lvl = lvl;
        return _this;
    }
    Developer.prototype.greeting = function () {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this.name));
    };
    Object.defineProperty(Developer.prototype, "lvl", {
        get: function () {
            return this._lvl;
        },
        set: function (val) {
            this._lvl = val;
        },
        enumerable: false,
        configurable: true
    });
    return Developer;
}(Employee_1.default));
exports.default = Developer;
