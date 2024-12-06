
const gameField = ["","","","","","","","",""];

let currountPlayer = "X";
let result;
let onGame = false;
let draws = 0;
let X = 0;
let O = 0;

function clicked(buttonid) {
    if(gameField[buttonid] == ""){
        gameField[buttonid] = currountPlayer;
        document.getElementById(buttonid).innerHTML = currountPlayer;
        onGame = true;
        playerSwitchdisabled();
        checkWinner();
    }
}

let checkFieldTiles = () => {
    // Horizontal
    return checkTile(0,1,2)+
    checkTile(3,4,5)+
    checkTile(6,7,8)+
    //  Vertikal
    checkTile(0,3,6)+
    checkTile(1,4,7)+
    checkTile(2,5,8)+
    // Diagonal
    checkTile(0,4,8)+
    checkTile(2,4,6);
}

function checkWinner(){
    result = checkFieldTiles();
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
        automaticGameRestart();
    }else{
        checkdraw();
    }
    currountPlayerSwitch();
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


function checkdraw(){
    if(!gameField.some(field=> field=="")){
        draws++;
        document.getElementById("draw").innerHTML = draws;
        automaticGameRestart();
    }
}

function setup(){
    for (let index = 0; index < gameField.length; index++) {
        document.getElementById(index).innerHTML = ""; 
        gameField[index] = "";
    }
    buttonMode(false);
    onGame = false;
    playerSwitchdisabled();
    document.getElementById("resetField").style.background = '#007bff';
    document.getElementById("resetField").innerText = 'Field Reset';
}

function pointReset(){
    draws = 0;
    O = 0;
    X = 0;
    document.getElementById("draw").innerHTML = draws;
    document.getElementById("point-O").innerHTML = O;
    document.getElementById("point-X").innerHTML = X;

}

function automaticRestartChecked(){
    if(!onGame && document.getElementById("checkBox").checked){
        setup();
    }
}

function automaticGameRestart(){
    document.getElementById("resetField").style.background='#008000';
    document.getElementById("resetField").innerText = 'Restart';
    onGame = false;
    playerSwitchdisabled();
    if(document.getElementById("checkBox").checked){
        setup();
    }else{
        buttonMode(true);
    }
}

function resetGame(){
    playerSwitchdisabled();
    setup();
    pointReset();
}

function buttonMode(mode){
    for (let i = 0; i <= 8; i++) {
        document.getElementById(i).disabled = mode; 
    }
}

function playerSwitchdisabled(){
    document.getElementById("player_switch").disabled = onGame;
    if(onGame){
        document.getElementById("player_switch").style.background = '#808080';
    }else{
        document.getElementById("player_switch").style.background = '#007bff';
    }
}
