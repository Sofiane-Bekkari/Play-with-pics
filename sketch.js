let spot = [] ;
let Pic ;
let Pics = []
let me = 0;

function preload() {
  for (let z = 0; z < 6; z++) { 
    Pics[z] = loadImage('Img/spong' + z + '.png');
  }
}

function setup() {
  createCanvas(500, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(0,400);
    let y = random(10,450);
    let r = random(25,100)
    let img = random(Pics);
    let b = new thing(x,y,r,img);
    spot.push(b);
  }
   let x = 100;
   let y = 100;
   let Npic = loadImage('Img/Magic-wand.png')
   let img = random(Pics)
   me = new thing(x,y,60,Npic); 
}
// Call mousePressed for check location 
function mousePressed() {
  for (let i = 0; i < spot.length; i++) {
    spot[i].clicked(mouseX,mouseY);
  }
}

function draw() {
  background(10,150,200,150);
  me.x = mouseX;
  me.y = mouseY;
  me.show();
  me.move();
  for (let i = 0; i < spot.length; i++) {
    spot[i].show()
    spot[i].move()
  }
}

// Create an Object 
class thing {

  constructor(x,y,r,img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.img = img;
    }
  // Create a click Function to check Pics!
  clicked(px,py) {
    //  This is a long Condution for check placement for Pics! 
    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.img = random(Pics)
      textSize(70)
      text('Well Done',30,200)
      console.log('here!!');
    } 
  }
  move() {
    this.x = this.x + random(-0.1,0.1);
    this.y = this.y + random(-0.5,0.5);
   }
  show() {
    image(this.img,this.x,this.y,this.r,this.r);
  }
}