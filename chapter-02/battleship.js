var randomLocation = Math.floor(Math.random()*5);
var shipPOne = randomLocation;
var shipPTwo = shipPOne +1;
var shipPThree = shipPOne +2;
var guess;
var hit =0;
var tries = 0;
var shipSunk;

while (!shipSunk){
    guess = window.prompt("Please select a number from 0 to 6");
    if (guess<0 || guess>6){
        alert("Invalid input, try again...");
        continue;
    }else{
        tries +=1;
        }if (guess ==shipPOne || guess == shipPTwo || guess == shipPThree){
            alert("It's a HIT!");
            hit+=1;
            if(hit ==3){
                alert("The ship has been sunken");
                shipSunk;
                break;
            }
        }else{
            alert("It's a MISS...");
        }
}
alert("It took you " + tries + " tries " + "to sink the ship.");
alert("Accuracy: " + (hit/tries)* 100 +"%");
