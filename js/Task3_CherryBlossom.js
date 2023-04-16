let brown1;
let brown2;



function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop(); //Stops p5.js from continuously executing the code within draw().
    strokeJoin(ROUND);
    brown1 = color('#4a4232');
    brown2 = color('#2d1c21');

    //SLIDER
    slider = createSlider(10, 90, 45, 5); //10 - 90 range, starts from 45 when page loads, and has a 5 slider step size. I picked 5, as smaller felt too quick.
    slider.position(30, 30);
    slider.style("width", "300px");
    slider.input(draw);
}

function draw() {
    background(252, 237, 247);
    resetMatrix();
    translate(width / 2, height) //translating the drawing point to the middle of screen, at the the bottom. Otherwise, it would draw from the top left corner.
    branch(180);

}

function branch(len) {
    slider.value();
    strokeWeight(map(len, 20, 250, 1, 10));
    stroke(lerpColor(brown1, brown2, random(0.25, 0.75))); //Blends colors to find a color somewhere between them.
    line(0, 0, 0, -len); //the drawing point has been already translated, so we can start drawing from 0, 0 and it will draw in the middle of the screen from the bottom.
    translate(0, -len);
    if (len > 20) {
        if (len < 40) {

            //FLOWERS 
            let r = 160 + random(-20, 20);
            let g = 30 + random(-10, 10);
            let b = 100 + random(-20, 20);
            fill(r, g, b, 100); //slightly different shades of pink and 100 transparency
            noStroke();
            let cell = 6; //'flower' size

            //drawing a custom petal shape
            beginShape();

            vertex(0, 0);
            vertex(cell, 0);
            vertex(cell * 2, -cell);
            vertex(cell * 3, -2 * cell);
            vertex(cell * 3, -3 * cell);
            vertex(cell * 3, -4 * cell);
            vertex(cell * 2, -4 * cell);
            vertex(cell, -3 * cell);
            vertex(0, -2 * cell);

            endShape(CLOSE);

            //drawing the same shape but rotating by 20 to create a flower
            beginShape();

            rotate(20);
            vertex(0, 0);
            vertex(cell, 0);
            vertex(cell * 2, -cell);
            vertex(cell * 3, -2 * cell);
            vertex(cell * 3, -3 * cell);
            vertex(cell * 3, -4 * cell);
            vertex(cell * 2, -4 * cell);
            vertex(cell, -3 * cell);
            vertex(0, -2 * cell);

            endShape(CLOSE);

            //drawing the same shape but rotating by 10 to create a flower
            beginShape();

            rotate(10);
            vertex(0, 0);
            vertex(cell, 0);
            vertex(cell * 2, -cell);
            vertex(cell * 3, -2 * cell);
            vertex(cell * 3, -3 * cell);
            vertex(cell * 3, -4 * cell);
            vertex(cell * 2, -4 * cell);
            vertex(cell, -3 * cell);
            vertex(0, -2 * cell);

            endShape(CLOSE);

        } else {
            // branch 1
            push(); //saves the current drawing style settings and transformations.
            rotate(random(-40, 40)); //gives random angle from -40 and 40
            branch(len * 0.7); // drawing a shorter branch.
            pop(); //restores the settings.

            // branch 2
            push();
            rotate(random(-30, 30));
            branch(len * 0.8);
            pop();

            // branch 3
            push();
            rotate(random(-20, 20));
            branch(len * 0.4);
            pop();

            // branch 4
            push();
            rotate(random(-10, 10));
            branch(len * 0.5);
            pop();

            // branch 5
            push();
            rotate(random(-10, 10));
            branch(len * 0.22);
            pop();
        }
    }

}

window.onresize = function () { location.reload(); } // refreshes page on resize to avoid a white border around canvas


