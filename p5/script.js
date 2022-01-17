var ball = { 
    x: 0, 
    y: 0,
    r: 100,
    direction: p5.Vector.random2D(),
    speed: 5,
    move: function () {
        let newX = this.x + this.direction.x * this.speed;
        let newY = this.y + this.direction.y * this.speed;
        if (newX + this.r < 0 || newX > innerWidth) {
            this.direction.x *= -1;

        }
        if (newY + this.r < 0 || newY > innerHeight) {
            this.direction.y *= -1;
        }
        this.y = newY;
        this.x = newX;
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
