let gameTick = 0;
let directions = [[0, 0, -10]];
let belly = [];
let addSegment = false;

class Segment {
  constructor(xTopLeft, yTopLeft, color, xDirection, yDirection) {
    this._width = 10;
    (this._height = 10), (this._xTopLeft = xTopLeft);
    this._yTopLeft = yTopLeft;
    this._color = color;
    this._xDirection = xDirection;
    this._yDirection = yDirection;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get xTopLeft() {
    return this._xTopLeft;
  }
  get yTopLeft() {
    return this._yTopLeft;
  }
  set width(x) {
    this._width = x;
  }
  set height(x) {
    this._height = x;
  }
  set xTopLeft(x) {
    this._xTopLeft = x;
  }
  set yTopLeft(x) {
    this._yTopLeft = x;
  }
  get color() {
    return this._color;
  }
  set color(x) {
    this._color = x;
  }
  get xDirection() {
    return this._xDirection;
  }
  set xDirection(x) {
    this._xDirection = x;
  }
  get yDirection() {
    return this._yDirection;
  }
  set yDirection(x) {
    this._yDirection = x;
  }
}

class Body {
  constructor() {
    this._segments = [
      new Segment(240, 240, "#cccc00", 0, -10),
      new Segment(240, 250, "#00cc00", 0, -10)
    ];
  }
  get segments() {
    return this._segments;
  }
  set segment(x) {
    this._segments = x;
  }
}

class Food {
  constructor() {
    this._segment = new Segment(
      Math.floor(Math.random() * 50) * 10,
      Math.floor(Math.random() * 50) * 10,
      "#cc0000",
      0,
      0
    );
    //console.log(this);
  }
  get segment() {
    return this._segment;
  }
  set segment(x) {
    this._segment = x;
  }
}

class SnakeComponent {
  constructor(window) {
    this.canvas = document.getElementById("snakeCanvas");
    this.context = this.canvas.getContext("2d");
    this._body = new Body();
    this._food = new Food();
    this._body._segments.forEach(e => {
      this.drawSegment(e);
    });
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
  get body() {
    return this._body;
  }
  set body(x) {
    this._body = x;
  }
  get food() {
    return this._food;
  }
  set food(x) {
    this._food = x;
  }
  get direction() {
    return this._direction;
  }
  set direction(x) {
    this._direction = x;
  }
  set context(x) {
    this._context = x;
  }
  drawSegment(segment) {
    this._context.fillStyle = segment.color;
    this._context.fillRect(
      segment.xTopLeft,
      segment.yTopLeft,
      segment.width,
      segment.height
    );
    this._context.stroke();
  }

  drawBody() {
    for (let i = 0; i < this.body._segments.length; i++) {
        
      const segment = this.body._segments[i];

      directions.forEach(direction => {
        if (gameTick === direction[0] + i) {
          segment.xDirection = direction[1];
          segment.yDirection = direction[2];
        }
      });

      //grow Body
      // last element of array & belly has a value
    //   if (i === this.body._segments.length - 1 && belly.length > 0) {
    //     const bellyS = belly.pop().segment;
    //     console.log(bellyS._yTopLeft);
    //     const newLastSegment = new Segment(
    //       bellyS._xTopLeft,
    //       bellyS._yTopLeft,
    //       "#0000FF",
    //       segment.xDirection,
    //       segment.yDirection
    //     );
    //     // newLastSegment._xTopLeft -= newLastSegment.xDirection;
    //     // newLastSegment._yTopLeft -= newLastSegment.yDirection;
    //     this.body._segments.push(newLastSegment);
    //   }

    if(addSegment){
        belly.push(belly[belly.length-1])
        addSegment = false;
    }

    
    if(this.checkFood()){
        addSegment = true;
    }

      //Assigning new position
      segment.xTopLeft += segment.xDirection;
      segment.yTopLeft += segment.yDirection;

      this.drawSegment(segment);
    }
    console.log(belly)
  }

  addSegment() {

  }

  drawFood() {
    this.drawSegment(this._food.segment);
  }

  checkFood() {
    return  this.food.segment.xTopLeft === this.body.segments[0].xTopLeft && this.food.segment.yTopLeft === this.body.segments[0].yTopLeft
  }

  removeFood() {}

  checkBorder() {}

  resetCanvas() {
    this.canvas.width = this.canvas.width;
  }

  toHtml() {
    this.resetCanvas();
    this.drawFood();
    this.drawBody();
    //console.log(this.body.segments);
    if (this.checkFood()) {
      // growBody();
      this.food = new Food();
    }
    gameTick++;

    setTimeout(() => {
      this.toHtml();
    }, 200);
  }
}

function init() {
  const snakeComponent = new SnakeComponent(this);
  snakeComponent.toHtml();

  document.body.onkeydown = event => {
    // pijltjestoets naar links
    if (event.keyCode === 37) {
      directions.push([gameTick, -10, 0]);
    }
    // pijltjestoets naar boven
    if (event.keyCode === 38) {
      directions.push([gameTick, 0, -10]);
    }
    // pijltjestoets naar rechts
    if (event.keyCode === 39) {
      directions.push([gameTick, 10, 0]);
    }
    // pijltjestoets naar beneden
    if (event.keyCode === 40) {
      directions.push([gameTick, 0, 10]);
    }
  };
}

window.onload = init;
