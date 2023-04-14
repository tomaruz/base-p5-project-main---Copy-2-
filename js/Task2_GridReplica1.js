const CELL_SIZE = 100;
let x = 0;
let y = 0;

function setup() {
    let colours = [color('#251f3a'), color('#deb210'), color('#dbd9d7'), color('#ce3219'), color('#324494')]; // color array
    createCanvas(800, 800);

    //creating a grid
    while (y < height) {

        while (x < width) {
            fill(random(colours)); // returns a random colour from colours array and fills the squares
            stroke(255) // setting stroke to white
            strokeWeight(5)
            rect(x, y, CELL_SIZE, CELL_SIZE);

            //drawing shapes inside the squares
            noStroke();
            fill(random(colours));

            if (random(1) > 0.5) // creating a probabality of either an arc or a triangle filling in the cell
            {
                arc(x + CELL_SIZE / 2, y + CELL_SIZE / 2, 70, 70, 0, PI); // placing an arc in the middle of the cell and drawing it
            }
            else {
                triangle(x + 20, y + 75, x + 50, y + 25, x + 80, y + 75); // coordinates of 3 points that create a traingle
            }

            x += CELL_SIZE;
        }

        y += CELL_SIZE;
        x = 0;
    }

}