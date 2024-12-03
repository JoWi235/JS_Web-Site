
let gameField = ["","","","","","","","",""];
let currountPlayer = "X";
let result;
let mode;
let draws = 0;
let X = 0;
let O = 0;

function clicked(buttonid) {
    if(gameField[buttonid] == ""){
        gameField[buttonid] = currountPlayer;
        document.getElementById(buttonid).innerHTML = currountPlayer;
        checkfield();
    }
}

function checkfield(){
    result =
    // Horizontal
    checkTile(0,1,2)+
    checkTile(3,4,5)+
    checkTile(6,7,8)+
    //  Vertikal
    checkTile(0,3,6)+
    checkTile(1,4,7)+
    checkTile(2,5,8)+
    // Diagonal
    checkTile(0,4,8)+
    checkTile(2,4,6);
    
    if(result > 0){
        switch(currountPlayer){
            case "X":
                X++;
                document.getElementById("point-X").innerHTML = X; 
                break;
            case "O":
                O++;
                document.getElementById("point-O").innerHTML = O;
                break;
        }
        currountPlayerSwitch();
        automaticGameRestart();
    }else{
        currountPlayerSwitch();
        draw();
    }
}

function currountPlayerSwitch(){
    if (currountPlayer == "X"){
        currountPlayer = "O";
        document.getElementById("player").innerHTML = "Current Player: O";
    }else if(currountPlayer == "O"){
        currountPlayer = "X";
        document.getElementById("player").innerHTML = "Current Player: X";
    }
}

function checkTile( x1, x2, x3){
    if(gameField[x1] == "X" && gameField[x2] == "X" && gameField[x3] == "X" || gameField[x1] == "O" && gameField[x2] == "O" && gameField[x3] == "O"){
        return 1;
    }else{
        return 0;
    }
}


function draw(){
    if(!gameField.some(field=> field=="")){
        draws++;
        document.getElementById("draw").innerHTML = draws;
        automaticGameRestart();
    }
}

function setup(){
    gameField = ["","","","","","","","",""];
    for (let index = 0; index < gameField.length; index++) {
        document.getElementById(index).innerHTML = ""; 
    }
    buttonMode(false);
}

function pointReset(){
    draws = 0;
    O = 0;
    X = 0;
    document.getElementById("draw").innerHTML = draws;
    document.getElementById("point-O").innerHTML = O;
    document.getElementById("point-X").innerHTML = X;

}

function automaticGameRestart(){
    if(document.getElementById("checkBox").checked){
        setup();
    }else{
        buttonMode(true);
    }
}

function resetGame(){
    setup();
    pointReset();
}

function buttonMode(mode){
    if(mode){
        for (let i = 0; i <= 8; i++) {
            document.getElementById(i).disabled = true; 
        }
    }else{
        for (let i = 0; i <= 8; i++) {
            document.getElementById(i).disabled = false; 
        }
    }
}
