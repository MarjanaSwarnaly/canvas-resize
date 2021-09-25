let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c for context
let c = canvas.getContext('2d');

// function for rectangle

// c.fillRect(x, y, width, height );
// c.fillStyle = 'rgba(255,0,0,0.4)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(255,255,0,0.4)';
// c.fillRect(300, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.4)';
// c.fillRect(100, 300, 100, 100);


// line

// c.beginPath();

// // c.moveTo(x,y)
// c.moveTo(50, 300);
// c.lineTo(300, 150);
// c.lineTo(400, 350);
// c.strokeStyle = "blue";
// c.stroke();

// Arc

// c.arc(arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise ? : boolean): void
//  )
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'green'
// c.stroke();

// Make circle loop


// let i = 0;
// while (i < 5) {

//     c.beginPath();
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let rectwidth = 100;
//     let rectheight = 100;
//     let randomColor = 'rgba(' +
//       Math.floor(Math.random() * 256) + ',' +
//       Math.floor(Math.random() * 256) + ',' +
//       Math.floor(Math.random() * 256) + ',' +
//       0.4 + ')';
//     c.fillStyle = randomColor;
//     c.fillRect(x, y, rectwidth, rectheight);

//   i++;

// }

// for (let i = 0; i < 50; i++) {

// }




// For independent obj
function Rectangle(x, y, dx, dy, rectwidth, rectheight, randomColor) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rectwidth = rectwidth;
  this.rectheight = rectheight;
  this.randomColor = randomColor;

  this.draw = function () {
    c.beginPath();
    c.fillStyle = this.randomColor;
    c.fillRect(this.x, this.y, this.rectwidth, this.rectheight);
  }
  this.update = function () {
    if (this.x + this.rectwidth > innerWidth || this.x < 0) {
      this.dx = -this.dx;
      // X-velocity
    }

    if (this.y + this.rectheight > innerHeight || this.y < 0) {
      this.dy = -this.dy;
      // Y velocity
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();

  }

}

let rectArray = [];
for (let i = 0; i < 100; i++) {

  let rectwidth = 100;
  let rectheight = 100;
  let x = Math.random() * (innerWidth - rectwidth * 2) + rectwidth;
  let y = Math.random() * (innerHeight - rectheight * 2) + rectheight;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;
  let randomColor = 'rgba(' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    Math.floor(Math.random() * 256) + ',' +
    0.4 + ')';

  rectArray.push(new Rectangle(x, y, dx, dy, rectwidth, rectheight, randomColor));

}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < rectArray.length; i++) {
    rectArray[i].update();
  }

}
animate();