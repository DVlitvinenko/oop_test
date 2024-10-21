class Rect {
  private _width;
  private _hight;

  constructor(width, hight) {
    this._width = width;
    this._hight = hight;
  }

  public get width() {
    return this._width;
  }
  public set width(number) {
    if (number <= 0) {
      this._width = 1;
    } else {
      this._width = number;
    }
  }

  calcArea() {
    return this._width * this._hight;
  }

  calcPerimeter() {
    return (this._width + this._hight) * 2;
  }
}
export default Rect;
