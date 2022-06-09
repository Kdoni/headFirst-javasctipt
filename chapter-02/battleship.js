const shipPOne = 3;
const shipPTwo = 4;
const shipPThree = 5;
var guess;
var hit =0;
var tries = 0;
var shipSunk = false;

while (shipSunk ===false){
    let guess = Number(window.prompt("Enter a number from 0 to 6: "));
    if (guess === 3 || guess === 4 || guess === 5){
        alert("It's a hit!");
        tries +=1;
        hit +=1;
        if (hit ===3){
            break;
        }
    }
    else{
        alert("It's a miss...Try again...");
        tries +=1;
    }}
alert("You sunk the ship"  + "It took you " +tries +" tries.")

