"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = /** @class */ (function () {
    function Rect(width, hight) {
        this._width = width;
        this._hight = hight;
    }
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (number) {
            if (number <= 0) {
                this._width = 1;
            }
            else {
                this._width = number;
            }
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.calcArea = function () {
        return this._width * this._hight;
    };
    Rect.prototype.calcPerimeter = function () {
        return (this._width + this._hight) * 2;
    };
    return Rect;
}());
exports.default = Rect;
