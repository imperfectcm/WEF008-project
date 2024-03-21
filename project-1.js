const unitLength = 20;
let darkerColor = '#505E71';
let moreDarkerColor = '#2E3B4E'
let LighterColor = '#ADBACC';
let strokeColor = 255;
let columns; /* To be determined by window width */
let rows; /* To be determined by window height */
let a2 = 2
let a3 = 3
let b3 = 3
let randomBirth = false





let frameRate1 = document.querySelector(".frameRate1")
frameRate1.addEventListener("change", e => {
    frameRate(parseInt(frameRate1.value))
})

let surMaxBtnIn = document.querySelector(".sur-max-btn-in")
let surMax = document.querySelector("#survival-max")
surMaxBtnIn.addEventListener("click", e => {
    if (surMax.innerHTML < 8) {
        surMax.innerHTML++
        a3++
    }
})

let surMaxBtnDe = document.querySelector(".sur-max-btn-de")
surMaxBtnDe.addEventListener("click", e => {
    if (surMax.innerHTML > 0) {
        surMax.innerHTML--
        a3--
    }
})

let neiMaxBtnIn = document.querySelector(".nei-max-btn-in")
let neiMax = document.querySelector("#neighbors-max")
neiMaxBtnIn.addEventListener("click", e => {
    if (neiMax.innerHTML < 8) {
        neiMax.innerHTML++
        b3++
    }
})

let neiMaxBtnDe = document.querySelector(".nei-max-btn-de")
neiMaxBtnDe.addEventListener("click", e => {
    if (neiMax.innerHTML > 0) {
        neiMax.innerHTML--
        b3--
    }
})

let reset = document.querySelector("#reset")
reset.addEventListener("click", e => {
    setup()
})

let pause1 = document.querySelector("#pause1")
pause1.addEventListener("click", e => {
    let game = true;
    if (game = true) {
    pause2();
    game = false;
} else if (game = false) {
    game = true;
    play2();
}console.log(game)
})

let randomStart = document.querySelector("#randomStart")
randomStart.addEventListener("click", e => {
    randomBirth = true;
    init();
})


let currentBoard;
let nextBoard;


function setup() {
    randomBirth = false;
    /* Set the canvas to be under the element #canvas*/
    let canvas = createCanvas(windowWidth - 30, windowHeight - 100);
    canvas.style('display', 'block');
    canvas.parent(document.querySelector("#canvas"));
    // canvas.position(10, 0, relative)

    /*Calculate the number of columns and rows */
    columns = floor(width / unitLength);
    rows = floor(height / unitLength);

    /*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */
    currentBoard = [];
    nextBoard = [];
    for (let i = 0; i < columns; i++) {
        currentBoard[i] = [];
        nextBoard[i] = [];
    }


    // Now both currentBoard and nextBoard are array of array of undefined values.
    init(); // Set the initial values of the currentBoard and nextBoard
}


function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (randomBirth == false) {
                currentBoard[i][j] = 0; // one line if
                nextBoard[i][j] = 0;
            } else {
                currentBoard[i][j] = random() > 0.8 ? 1 : 0;
                nextBoard[i][j] = 0;
            }
            // let someVariables = <condictions> : <when_true> : <when_false>;
            // currentBoard[i][j] = random() > 0.8 ? 1 : 0; // one line if
            // currentBoard[i][j] = 0; // one line if
            // nextBoard[i][j] = 0;
        }
    }


    currentBoard[0][3] = 1
    currentBoard[1][3] = 1
    currentBoard[2][3] = 1
    currentBoard[2][2] = 1
    currentBoard[1][1] = 1

}


function draw() {
    background(strokeColor);
    generate();


    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] == 1) {
                fill(darkerColor);
            } else {
                fill(LighterColor);
            }
            stroke(strokeColor);
            rect(i * unitLength, j * unitLength, unitLength, unitLength);
        }
    }

}

function generate() {
    //Loop over every single box on the board
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            // Count all living members in the Moore neighborhood(8 boxes surrounding)
            let neighbors = 0;
            for (let i of [-1, 0, 1]) {
                for (let j of [-1, 0, 1]) {
                    if (i == 0 && j == 0) {
                        // the cell itself is not its own neighbor
                        continue;
                    }
                    // The modulo operator is crucial for wrapping on the edge
                    neighbors +=
                        currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
                }
            }

            // Rules of Life
            if (currentBoard[x][y] == 1 && neighbors < a2) {
                // Die of Loneliness
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 1 && neighbors > a3) {
                // Die of Overpopulation
                nextBoard[x][y] = 0;
            } else if (currentBoard[x][y] == 0 && neighbors == b3) {
                // New life due to Reproduction
                nextBoard[x][y] = 1;
                // fill(255);
            } else {
                // Stasis
                nextBoard[x][y] = currentBoard[x][y];

            }

        }
    }

    // Swap the nextBoard to be the current Board
    [currentBoard, nextBoard] = [nextBoard, currentBoard];
}


function mouseDragged() {
    /**
     * If the mouse coordinate is outside the board
     */
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
        return;
    }

    const x = Math.floor(mouseX / unitLength);

    const y = Math.floor(mouseY / unitLength);
    console.log(mouseX, mouseY, x, y)
    currentBoard[x][y] = 1;
    fill(darkerColor);
    stroke(strokeColor);
    rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

function mousePressed() {
    noLoop();
    mouseDragged();
}

function mouseReleased() {
    loop()
}

function pause2() {
    noLoop();
}

function play2() {
    loop();
}