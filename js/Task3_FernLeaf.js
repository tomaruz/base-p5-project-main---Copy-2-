
var angle = 0;

let green1;
let green2;

var slider;

function setup() {

    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES); //Sets the current mode of p5 to given mode. Default mode is RADIANS.

    frameRate(10);

    strokeJoin(ROUND);

    green1 = color(28, 74, 51);
    green2 = color(102, 153, 51);

    //SLIDER
    slider = createSlider(10, 55, 45, 0.01); // 0 - 55 range, starts from 35 when page loads, and has a 0.01 slider step size.
    slider.position(width / 2 - 200, height / 8);
    slider.style("width", "400px");

}

function draw() {

    background(0);
    angle = slider.value();


    translate(width / 2, height); //translating the drawing point to the middle of screen, at the the bottom.

    branch(150); //branch(len:) giving a length value of 150 to the branch function.

}

function branch(len) { //len = length

    line(0, 0, 0, - len); //the drawing point has been already translated, so we can start drawing from 0, 0 and it will draw in the middle of the screen from the bottom.

    strokeWeight(map(len, 40, 200, 8, 7)); //

    stroke(255);
    stroke(lerpColor(green1, green2, random(0.4, 0.75)));
    translate(0, -len);

    if (len > 8) { // when length is greater than 8 pixels, call branch(draw another branch). This stops browser from crashing, as otherwise it would run on an infite loop creating infinite tiny branches.


        push(); // saves the current drawing style settings and transformations.
        rotate(6); // creates a slight bend to the stem.
        branch(len * 0.8); // drawing a shorter branch.
        pop(); //restores the settings.

        push();
        rotate(angle); // rotating 55 degrees to the right. The max angle has already been set to 60 when I created a slider and set the max range.
        branch(len * 0.4);
        pop();

        push();
        rotate(-angle); // rotating 55 degrees to the left
        branch(len * 0.4); // and drawing another branch.
        pop();

    }

}


