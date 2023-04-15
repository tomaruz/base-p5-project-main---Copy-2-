let t = 0; // time variable

let paused = false;

//fade in effect
var fade;
var fadeAmount = 10;

//adding music
// const playPauseButton = document.getElementById('button');
const audio = new Audio("/audio/wave_maker_audio.mp3");

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fade = 0; // fade set to 0 = animation is invisable
}

// when window loads: do not play animation and do not show animation
window.addEventListener("load", () => {
  noLoop();
  background(10);
});


function draw() {
  background(10, 10); // translucent background (creates trails)
  
  //when animation first starts, it gradually fades in
  fill(255, fade)

  if (fade < 0) fadeAmount; //checks if the value of fade is 0
 
  fade += fadeAmount;
  
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

window.onresize = function () { location.reload(); } // refreshes page on resize to avoid a white border around canvas


//adding music
//pausing and playing animation
function mousePressed() {
  if (audio.paused) {
    audio.play();
    loop();
    fill(255);
  }
  else {
    audio.pause();
    noLoop();
  }
}