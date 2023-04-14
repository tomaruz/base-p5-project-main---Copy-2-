const CELL_SIZE = 100;
let x = 0;
let y = 0;



function setup() {

    let colours = [color('#11304b'), color('#e1dbb4'), color('#ed9033'), color('#f9c554')];
    createCanvas(800, 800);
    // color array

    //creating a grid
    while (y < height) {

        while (x < width) {

            fill(color('#cb252b'))
            noStroke();
            rect(x, y, 100, 100);

            fill(random(colours)); // returns a random element from colours array and fills the squares
            noStroke();


            if (random(1) > 0.5) {

                fill(random(colours));
                noStroke();
                arc(x + 100, y, 200, 200, radians(90), radians(180));
            }

            else if (random(1) > 0.5) {

                fill(random(colours));
                noStroke();
                arc(x, y, 200, 200, radians(0), radians(90));

            }

            else if (random(1) > 0.25) {

                fill(random(colours));
                noStroke();
                arc(x, y + 100, 200, 200, radians(-90), radians(-360));

            }

            else {

                arc(x + 100, y + 100, 200, 200, radians(180), radians(-90));

            }


            x += CELL_SIZE;
        }

        y += CELL_SIZE;
        x = 0;
    }

}