let scoreP1 = 0;
let scoreP2 = 0;

class Ball {
  constructor(x, y) {
    this._r = 5;
    this._x = x;
    this._y = y;
  }
}

class Paddle {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  moveUp() {
    if (this._y >= 0) this._y = this._y - 10;
  }

  moveDown() {
    if (this._y <= 500 - 50) this._y = this._y + 10;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(v) {
    a;
    this._x = v;
  }
  set y(v) {
    this._y = v;
  }
}

class PingComponent {
  constructor(window) {
    this._canvas = document.getElementById("canvas");
    this._context = this.canvas.getContext("2d");
    this._ball = new Ball();
    this._paddle1 = new Paddle(10, 225);
    this._paddle2 = new Paddle(480, 225);
  }

  toHtml() {
    this.resetCanvas();
    this.drawPaddles();
    this.drawBall();
    this.drawMiddleLine();

    setTimeout(() => {
      this.toHtml();
    }, 200);
  }

  drawBall() {
    this.context.beginPath();
    this.context.arc(canvas.width / 2, canvas.height / 2, 5, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
  }

  drawPaddles() {
    this.context.beginPath();
    this.context.rect(this._paddle1._x, this._paddle1._y, 10, 50);
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.rect(this._paddle2.x, this._paddle2.y, 10, 50);
    this.context.fill();
    this.context.stroke();
  }

  drawMiddleLine() {
    this.context.setLineDash([10, 10]);
    this.context.beginPath();
    this.context.moveTo(canvas.width / 2, 0);
    this.context.lineTo(canvas.width / 2, canvas.height);
    this.context.stroke();
  }

  resetCanvas() {
    canvas.width = canvas.width;
  }

  get canvas() {
    return this._canvas;
  }
  get context() {
    return this._context;
  }
  set canvas(x) {
    this._canvas = x;
  }

  set context(x) {
    this._context = x;
  }
}

function init() {
  const pingComponent = new PingComponent(this);
  pingComponent.toHtml();

  let a = false;
  let q = false;
  let up = false;
  let down = false;

  document.body.onkeydown = event => {
    switch (event.keyCode) {
      case 65:
        a = true;
        break;
      case 81:
        q = true;
        break;
      case 38:
        up = true;
        break;
      case 40:
        down = true;
        break;
    }
    move();
  };

  document.body.onkeyup = event => {
    switch (event.keyCode) {
      case 65:
        a = false;
        break;
      case 81:
        q = false;
        break;
      case 38:
        up = false;
        break;
      case 40:
        down = false;
        break;
    }
    move();
  };

  function move() {
    //a
    if (a) {
      pingComponent._paddle1.moveUp();
    }

    //q
    if (q) {
      pingComponent._paddle1.moveDown();
    }

    // pijltjestoets naar boven
    if (up) {
      pingComponent._paddle2.moveUp();
    }

    // pijltjestoets naar beneden
    if (down) {
      pingComponent._paddle2.moveDown();
    }
  }
}

window.onload = init;
