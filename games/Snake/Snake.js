let gameTick = 0;
let directions = [[0, 0, -10]];
let snekspeed = 1

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
    this._belly = []
    this.has_feces = false
    this.feces = null
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

      // Add to tail if feces from last gametick were detected
      if (this._body.has_feces) {
        this.body._segments.push(this._body._feces)
      }

      // Prepare feces if food reached the end of the belly
      this._body.has_feces = this._body._belly.pop()
      if (this._body.has_feces) {
        let last_tail = this.body._segments[this.body._segments.length - 1]
        this._body._feces = new Segment(last_tail.xTopLeft - last_tail.xDirection, last_tail.yTopLeft - last_tail.yDirection, last_tail.color, last_tail.xDirection, last_tail.yDirection)
      }

      //Assigning new position
      segment.xTopLeft += segment.xDirection;
      segment.yTopLeft += segment.yDirection;

      this.drawSegment(segment);
    }
  }


  drawFood() {
    this.drawSegment(this._food.segment);
  }

  checkFood() {
    return this.food.segment.xTopLeft === this.body.segments[0].xTopLeft && this.food.segment.yTopLeft === this.body.segments[0].yTopLeft
  }

  eat() {
    this._
    this._body._belly.unshift(true);
  }

  fillBelly() {
    this._body._belly.unshift(false)
  }

  removeFood() { }

  checkBorder() { }

  resetCanvas() {
    this.canvas.width = this.canvas.width;
  }

  checkLoseCondition() {
    let head = this._body._segments[0]
    let segments = this._body._segments
    segments.slice(1).forEach(function (segment) {
      let self_touch = head._xTopLeft == segment._xTopLeft && head._yTopLeft == segment._yTopLeft
      let wall_touch = segment._xTopLeft < 0 || segment._yTopLeft < 0
      if (self_touch || wall_touch) {
        window.alert("Game over! Score: "+(segments.length*100-200).toString());
        location.reload();
      }
    });
    return false
  }

  updateScore() {
    document.getElementById('score').innerHTML = "Score: "+(this._body._segments.length*100-100).toString();
  }

  toHtml() {
    this.resetCanvas();
    this.drawFood();

    if (this.checkFood()) {
      this.eat()
      this.food = new Food();
      this.updateScore();
     
    }
    this.fillBelly()
    this.drawBody();
    this.checkLoseCondition()
    gameTick++;


    setTimeout(() => {
      this.toHtml();
    }, 200 * snekspeed);
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
