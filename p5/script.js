var ball = { 
    x: 0, 
    y: 0,
    r: 40,
    direction: p5.Vector.random2D(),
    speed: 5,
    move: function () {
        this.x += this.direction.x * this.speed;
        this.y += this.direction.y * this.speed;
    },
    draw: function () {
        ellipse(ball.x, ball.y, 2*ball.r, 2*ball.r);
    }
};

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ball.x = window.innerWidth / 2;
    ball.y = window.innerWidth / 2;
  }
  
  function draw() {
    background(0);
    ball.draw();
    ball.move();
    }