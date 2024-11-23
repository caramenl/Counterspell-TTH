//board
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//baby
let babyWidth = 46;
let babyHeight = 46;
let babyX = boardWidth/2 - babyWidth/2;
let babyY = boardHeight*7/8 - babyHeight;
let babyRightImg;
let babyLeftImg;

let baby = {
    img : null,
    x : babyX,
    y : babyY,
    width : babyWidth,
    height : babyHeight
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight ; 
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board


    //load images
    babyRightImg = new Image();
    babyRightImg.src = "./baby_right.png";
    baby.img = babyRightImg;
    babyRightImg.onload = function() {
        context.drawImage(baby.img, baby.x, baby.y, baby.width, baby.height);
    }
}


