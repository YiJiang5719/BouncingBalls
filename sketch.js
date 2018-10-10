var myBall;
var balls = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //myBall.speed = random(10,20);
  var ballNumber = 10;
  for (var i = 0 ; i < ballNumber; i ++){
    var myBall = new Ball (random(0,width),random(0,height),10);
    myBall.speed = random(10,20);
    myBall.diameter = random(2,100);
    //myBall.color = color(random(255),random(255),random(255));
    balls.push(myBall); //把创建的ball放置到原本是空的balls的array里
  }
}

function draw() {
  // put drawing code here
  background(0,100);
  for (var j = 0 ; j < balls.length; j ++){
    balls[j].move();
    balls[j].display();
  //  balls[j].diameter += random(-10,1);
    balls[j].color = color(255);
  }
}

function Ball (_x,_y,_diameter) {

  this.x = _x ;
  this.y = _y ;
  this.diameter = _diameter ;
  this.color = 'blue';
  this.speed = 2;

  var xDirection =1 ; //x direction
  var yDirection =1 ; //y direction
    //objetct

    this.display = function(){
      noStroke();
      fill(this.color);
      ellipse(this.x , this.y , this.diameter);
    }
    this.move = function(){
      this.x += this.speed * xDirection;
      this.y += this.speed * yDirection;
      if (mouseIsPressed|| this.y > windowHeight || this.y < 0 ){
        yDirection = yDirection * -1;
      }

      if (mouseIsPressed || this.x > windowWidth || this.x < 0 ){
        xDirection = xDirection * -1;
      }

    }

}
