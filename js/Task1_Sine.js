let x = 0;
let y = 0;
let theta = 0; //start angle at 0
let inc = 0.01; //wave speed
let offset = 0; //the amount offset from beginning of wave
let amplitude; //the maximum height of wave
let frequency; //the number of waves produced per unit of time
let maxAngle;
let trail = []; //an empty array for the cursor circles

//creating variables for a function that toggles between white and black modes
let black = 0;
let white = 255;
let backgroundColor = black;
let circleColor = white;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  amplitude = windowHeight;
  frequency = windowWidth;
  maxAngle = (windowWidth / frequency) * TWO_PI;
}

function draw() {
  background(backgroundColor);
  stroke(circleColor);
  noFill();

  trail.push(createVector(mouseX, mouseY)); //adding to the trail array and storing elements as the mouse moves

  //limiting the number of circles to 25
  if (trail.length > 25) {
    trail.shift();
  }

  //drawing cursor circles 
  for (let i = 0; i < trail.length; i++) {
    const current = trail[i];
    ellipse(current.x, current.y, i);
    //draws circles while i is less than trail.lenght which is 35
    //when the circle is closer to the mouse = bigger
    //when the circle is further away from the mouse = smaller
    //for this we use index, greater index = bigger circle
  }

  let length = 2; //number of waves

  // when using while, must give an end or it will go on forever
  while (theta < maxAngle + offset) {
    amplitude = ((theta - offset) / maxAngle) * (windowHeight / 8);

    //sine 1
    for (let i = length; i > 0; i--) {
      y = sin(theta - (i * 0.2)) * amplitude / 2;
      stroke(circleColor);
      ellipse(x, y + height / 2, 20);
    }

    //sine 2
    for (let i = length; i > 0; i--) {
      y = sin(theta - 5 - (i * 0.15)) * amplitude;
      ellipse(x, y + height / 2, 30);
    }

    theta += 0.08;
    x = ((theta - offset) / maxAngle) * windowWidth;
  }

  offset += inc;
  theta = offset;
}

//toggle between light and dark mode
function mousePressed() {
  if (backgroundColor == black) {
    backgroundColor = white
    circleColor = black
  }
  else {
    backgroundColor = black
    circleColor = white
  }
}