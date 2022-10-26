let sketch;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
  background("#2a2a2a");
  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 1200) {
      noFill();
      stroke(255, 147, 206);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(220, 220, 220);
    }
  }
}

new p5(sketch, "sketch");
