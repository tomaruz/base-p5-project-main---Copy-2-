let t = 0; // time variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  // make a x and y grid of ellipses
  translate(width / 2 - 200, height / 2 - 200); // positioning art in the middle of canvas
  for (let x = 0; x <= 400; x = x + 40) { // 400 wide and + 40 to create 10 gap between each particle as each particle is 30
    for (let y = 0; y <= 400; y = y + 40) {

      const angle = 10 * (x / width) + 15 * (y / height);

      // each particle moves in a slightly squashed circle
      const myX = x + 50 * cos(TWO_PI * t + angle);
      const myY = y + 30 * sin(TWO_PI * t + angle);

      ellipse(myX, myY, 30); // draw a 30 size particle

    }
  }

  t = t + 0.004; // update time 
}