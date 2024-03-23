const unitLength = 20;
let secondLife = false;
let thirdLife = false;
let thirdLifeColor = '#404040';
let secondLifeColor = '#707070';
let lifeColor = '#B0B0B0';
let emptyColor = '#E0E0E0';
let strokeColor = '#FFFFFF';
document.body.style.backgroundColor = strokeColor;
let h1Elements = document.getElementsByTagName("h1");
for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = secondLifeColor;
}
let C1 = document.querySelector(".sliderName");
let C2 = document.querySelector(".maxNei");
let C3 = document.querySelector(".maxNeiR");
let C4 = document.querySelector(".btnCM");
let C5 = document.querySelector(".btnCM2");
let C6 = document.querySelector(".btnCM3");
let C7 = document.querySelector(".btnCM4");
let C8 = document.querySelector(".form-select");

let C9 = document.querySelector(".changeNum")
let C10 = document.querySelector(".btn-up")
let C11 = document.querySelector(".btn-down")
let C12 = document.querySelector(".changeNum1")
let C13 = document.querySelector(".btn-up1")
let C14 = document.querySelector(".btn-down1")

let C15 = document.querySelector(".set1")
let C16 = document.querySelector(".set2")
let C17 = document.querySelector(".set3")

// C1.style.color = C2.style.color = C3.style.color = C4.style.color = C5.style.color = C6.style.color = C7.style.color = C8.style.color = C9.style.color = C12.style.color = secondLifeColor;

// C4.style.backgroundColor = C5.style.backgroundColor = C6.style.backgroundColor = C7.style.backgroundColor = C8.style.backgroundColor = C9.style.backgroundColor = C10.style.backgroundColor = C11.style.backgroundColor = C12.style.backgroundColor = C13.style.backgroundColor = C14.style.backgroundColor = "#FFFFFF";

let whiteColorMode = document.querySelector("#whiteColorMode")
whiteColorMode.addEventListener("click", e => {
    thirdLifeColor = '#404040';
    secondLifeColor = '#707070';
    lifeColor = '#B0B0B0';
    emptyColor = '#E0E0E0';
    strokeColor = '#FFFFFF';
    document.body.style.backgroundColor = strokeColor;

    for (var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = thirdLifeColor;
    }
    // above is H1 color
    C15.style.borderColor = C16.style.borderColor = C17.style.borderColor = secondLifeColor
    // above is setting icon color
    C1.style.color = C2.style.color = C3.style.color = C4.style.color = C5.style.color = C6.style.color = C7.style.color = C8.style.color = C9.style.color = C10.style.color = C11.style.color = C12.style.color = C13.style.color = C14.style.color = secondLifeColor;
    // above are words color
    C4.style.backgroundColor = C5.style.backgroundColor = C6.style.backgroundColor = C7.style.backgroundColor = C8.style.backgroundColor = C9.style.backgroundColor = C10.style.backgroundColor = C11.style.backgroundColor = C12.style.backgroundColor = C13.style.backgroundColor = C14.style.backgroundColor = strokeColor;
    // above are buttons color

})

let navyColorMode = document.querySelector("#navyColorMode")
navyColorMode.addEventListener("click", e => {
    thirdLifeColor = '#263645';
    secondLifeColor = '#344759';
    lifeColor = '#4F6478';
    emptyColor = '#939AA0';
    strokeColor = '#263645';
    document.body.style.backgroundColor = strokeColor;

    for (var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = emptyColor;
    }
    // above is H1 color
    C15.style.borderColor = C16.style.borderColor = C17.style.borderColor = emptyColor
    // above is setting icon color
    C1.style.color = C2.style.color = C3.style.color = C4.style.color = C5.style.color = C6.style.color = C7.style.color = C8.style.color = C9.style.color = C10.style.color = C11.style.color = C12.style.color = C13.style.color = C14.style.color = emptyColor;
    // above are words color
    C4.style.backgroundColor = C5.style.backgroundColor = C6.style.backgroundColor = C7.style.backgroundColor = C8.style.backgroundColor = C9.style.backgroundColor = C10.style.backgroundColor = C11.style.backgroundColor = C12.style.backgroundColor = C13.style.backgroundColor = C14.style.backgroundColor = '#425465';
    // above are buttons color
})

let darkColorMode = document.querySelector("#darkColorMode")
darkColorMode.addEventListener("click", e => {
    thirdLifeColor = '#ffffff';
    secondLifeColor = '#e0e0e0';
    lifeColor = '#b0b0b0';
    emptyColor = '#707070';
    strokeColor = '#404040';
    document.body.style.backgroundColor = strokeColor;

    for (var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = thirdLifeColor;
    }
    // above is H1 color
    C1.style.color = C2.style.color = C3.style.color = C4.style.color = C5.style.color = C6.style.color = C7.style.color = C8.style.color = C9.style.color = C10.style.color = C11.style.color = C12.style.color = C13.style.color = C14.style.color = thirdLifeColor;
    // above are words color
    C4.style.backgroundColor = C5.style.backgroundColor = C6.style.backgroundColor = C7.style.backgroundColor = C8.style.backgroundColor = C9.style.backgroundColor = C10.style.backgroundColor = C11.style.backgroundColor = C12.style.backgroundColor = C13.style.backgroundColor = C14.style.backgroundColor = emptyColor;
    // above are buttons color
})


let columns; /* To be determined by window width */
let rows; /* To be determined by window height */
let a2 = 2
let a3 = 3
let b3 = 3
let r = 1
let pattern = 0;
let arrowX = 0;
let arrowY = 0;
let croodX = 0;
let croodY = 0;

let game = true;
let randomColorMode = false
let randomBirth = false

let gunString =
    `........................O
......................O.O
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO
OO........O...O.OO....O.O
..........O.....O.......O
...........O...O
............OO`

let gun = gunString.split("\n")

let gliderString =
    `.O
..O
OOO`

let glider = gliderString.split("\n")

let spaceShipString =
    `.O..O
O
O...O
OOOO`

let spaceShip = spaceShipString.split("\n")

let pulsarString =
    `..OOO...OOO

O....O.O....O
O....O.O....O
O....O.O....O
..OOO...OOO

..OOO...OOO
O....O.O....O
O....O.O....O
O....O.O....O

..OOO...OOO`

let pulsar = pulsarString.split("\n")

let pentaString =
    `..O....O
OO.OOOO.OO
..O....O`

let penta = pentaString.split("\n")


let setRandomColor = () => {
    if (game == true) {
        randomColorMode = true
        const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = "#" + randomColor1;
        r++;
    }
}

let rc = document.querySelector("#randomColor")
rc.addEventListener("click", setRandomColor);
setRandomColor();


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
    surMax.innerHTML = 3;
    a3 = 3;
    neiMax.innerHTML = 3;
    b3 = 3;
    frameRate1.value = 20;
    document.querySelector("#floatingSelect").value = 0;
    pattern = 0;
    game = true;
    play2();
    setup()
})

let pause1 = document.querySelector("#pause1")
pause1.addEventListener("click", e => {
    if (game == true) {
        pause2();
        game = false;
    } else if (game == false) {
        game = true;
        play2();
    } console.log(game)
})

let randomStart = document.querySelector("#randomStart")
randomStart.addEventListener("click", e => {
    if (game == true) {
        randomBirth = true;
        init();
    }
})

document.querySelector("#floatingSelect").addEventListener("change", (e) => {
    pattern = e.currentTarget.value
    console.log(pattern)
})


let currentBoard;
let nextBoard;


function setup() {
    frameRate(20)
    randomBirth = false;
    randomColorMode = false;
    /* Set the canvas to be under the element #canvas*/
    let canvas = createCanvas(windowWidth - 120, windowHeight - 290);

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
}


function draw() {
    background(strokeColor);
    generate();

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] == 1 && randomColorMode == false) {
                fill(lifeColor);
                if (nextBoard[i][j] == 1) {
                    fill(secondLifeColor);
                    secondLife = true
                } else if (currentBoard[i][j] == 1 && secondLife) {
                    fill(thirdLifeColor);
                    thirdLife = true
                }
            } else if (currentBoard[i][j] == 1 && randomColorMode == true) {
                if (r % 2 == 1) {
                    fill(randomColor);
                } else if (r % 2 == 0) {
                    fill("#" + Math.floor(Math.random() * 16777215).toString(16));
                }
            } else {
                fill(emptyColor);
                secondLife = false;
                thirdLife = false;
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
                    neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
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
    let x = Math.floor(mouseX / unitLength);
    let y = Math.floor(mouseY / unitLength);
    columns = floor(width / unitLength);
    rows = floor(height / unitLength);

    if (mouseX > unitLength * columns || mouseX < 0 || mouseY > unitLength * rows || mouseY < 0) {
        return;
    } else if (pattern == 0 || pattern == 6 && x >= 0 && x <= (width / unitLength) && y >= 0 && y <= (height / unitLength)) {
        console.log(pattern)
        console.log(mouseX, mouseY, x, y)
        currentBoard[x][y] = 1;
        fill(lifeColor);
        stroke(strokeColor);
        rect(x * unitLength, y * unitLength, unitLength, unitLength);

    } else if (pattern == 1) {
        console.log(pattern)
        for (let i in gun) {
            for (let j in gun[i]) {
                if (gun[i][j] == "O") {
                    currentBoard[(x + Number(j) + columns) % columns][(y + Number(i) + rows) % rows] = 1
                    fill(lifeColor);
                    stroke(strokeColor);
                    rect((x + Number(j) + columns) % columns * unitLength, (y + Number(i) + rows) % rows * unitLength, unitLength, unitLength);
                }
            }
        }
    } else if (pattern == 2) {
        console.log(pattern)
        for (let i in glider) {
            for (let j in glider[i]) {
                if (glider[i][j] == "O") {
                    currentBoard[(x + Number(j) + columns) % columns][(y + Number(i) + rows) % rows] = 1
                    fill(lifeColor);
                    stroke(strokeColor);
                    rect((x + Number(j) + columns) % columns * unitLength, (y + Number(i) + rows) % rows * unitLength, unitLength, unitLength);
                }
            }
        }
    } else if (pattern == 3) {
        console.log(pattern)
        for (let i in spaceShip) {
            for (let j in spaceShip[i]) {
                if (spaceShip[i][j] == "O") {
                    currentBoard[(x + Number(j) + columns) % columns][(y + Number(i) + rows) % rows] = 1
                    fill(lifeColor);
                    stroke(strokeColor);
                    rect((x + Number(j) + columns) % columns * unitLength, (y + Number(i) + rows) % rows * unitLength, unitLength, unitLength);
                }
            }
        }
    } else if (pattern == 4) {
        console.log(pattern)
        for (let i in pulsar) {
            for (let j in pulsar[i]) {
                if (pulsar[i][j] == "O") {
                    currentBoard[(x + Number(j) + columns) % columns][(y + Number(i) + rows) % rows] = 1
                    fill(lifeColor);
                    stroke(strokeColor);
                    rect((x + Number(j) + columns) % columns * unitLength, (y + Number(i) + rows) % rows * unitLength, unitLength, unitLength);
                }
            }
        }
    } else if (pattern == 5) {
        console.log(pattern)
        for (let i in penta) {
            for (let j in penta[i]) {
                if (penta[i][j] == "O") {
                    currentBoard[(x + Number(j) + columns) % columns][(y + Number(i) + rows) % rows] = 1
                    fill(lifeColor);
                    stroke(strokeColor);
                    rect((x + Number(j) + columns) % columns * unitLength, (y + Number(i) + rows) % rows * unitLength, unitLength, unitLength);
                }
            }
        }
    }

}


function mousePressed() {

    // fakeX = Math.floor(mouseX / unitLength)
    // fakeY = Math.floor(mouseY / unitLength)
    // croodX = fakeX
    // croodY = fakeY
    noLoop();
    mouseDragged();
}

function mouseReleased() {
    croodX = Math.floor(mouseX / unitLength)
    croodY = Math.floor(mouseY / unitLength)
    console.log(mouseX, mouseY)
    if (game == true) {
        loop()
    }
}

function pause2() {
    noLoop();
}

function play2() {
    loop();
}

function getRandomCode() {
    "#" + Math.floor(Math.random() * 16777215).toString(16)
}

function windowResized() {
    createCanvas(windowWidth - 130, windowHeight - 170);
    setup();
    // resizeCanvas(windowWidth - 30, windowHeight - 170)
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        if (croodX >= 0 && croodX <= (width / unitLength) && croodY >= 0 && croodY <= (height / unitLength)) {
            noLoop()
            croodY++
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(croodX * unitLength, croodY * unitLength, unitLength, unitLength);
        } else {
            noLoop()
            arrowY++
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(arrowX * unitLength, arrowY * unitLength, unitLength, unitLength);
        }
    } else if (keyCode === UP_ARROW) {
        if (croodX >= 0 && croodX <= (width / unitLength) && croodY >= 0 && croodY <= (height / unitLength)) {
            noLoop()
            croodY--
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(croodX * unitLength, croodY * unitLength, unitLength, unitLength);
        } else {
            noLoop()
            arrowY--
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(arrowX * unitLength, arrowY * unitLength, unitLength, unitLength);
        }
    } else if (keyCode === LEFT_ARROW) {
        if (croodX >= 0 && croodX <= (width / unitLength) && croodY >= 0 && croodY <= (height / unitLength)) {
            noLoop()
            croodX--
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(croodX * unitLength, croodY * unitLength, unitLength, unitLength);
        } else {
            noLoop()
            arrowX--
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(arrowX * unitLength, arrowY * unitLength, unitLength, unitLength);
        }
    } else if (keyCode === RIGHT_ARROW) {
        if (croodX >= 0 && croodX <= (width / unitLength) && croodY >= 0 && croodY <= (height / unitLength)) {
            noLoop()
            croodX++
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(croodX * unitLength, croodY * unitLength, unitLength, unitLength);
        } else {
            noLoop()
            arrowX++
            currentBoard[croodX][croodY] = 1
            fill(lifeColor);
            stroke(strokeColor);
            rect(arrowX * unitLength, arrowY * unitLength, unitLength, unitLength);
        }
    } else if (keyCode === ENTER) {
        if (game == true) {
            game = false;
            pause2();
        } else if (game == false) {
            game = true;
            play2();
        }
    }
}

var keys = {};
window.addEventListener("keydown",
    function (e) {
        keys[e.code] = true;
        switch (e.code) {
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
            case "Space": e.preventDefault(); break;
            default: break; // do not block other keys
        }
    },
    false);
window.addEventListener('keyup',
    function (e) {
        keys[e.code] = false;
    },
    false);