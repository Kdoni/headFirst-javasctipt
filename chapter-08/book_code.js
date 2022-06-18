var view = {
    displayMessage: function(message){
        var test = document.getElementById("messageArea");
        test.innerHTML = message;
    },
    displayHit: function(location){
        var hit = document.getElementById(location);
        hit.setAttribute("class","hit");
    },
    displayMiss: function(location){
        var miss = document.getElementById(location);
        miss.setAttribute("class","miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    ships: [{
        locations: [0,0,0],
        hits: ["","",""]},
        {locations: [0,0,0],
        hits: ["","",""]},
        {locations: [0,0,0],
        hits: ["","",""]}
    ],
    generateShipLocations: function(){
        var locations;
        for (var i=0;i<this.numShips;i++){
            do{
                locations=this.generateShip();
            }while(this.collision(locations));
            this.ships[i].locations=locations;
        }
    },
    collision: function(locations){
        for (var i=0;i<this.numShips;i++){
            var ship = model.ships[i];
            for (var j=0; j<locations.length;j++){
                if (ship.locations.indexOf(locations[j]) >=0){
                    return true;
                }
            }
        }
        return false;
    },
    shipsSunk: 0,
    shipLength: 3,
    fire: function(guess){
        for (var i =0;i<this.numShips;i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index>=0){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)){
                    view.displayMessage("A battleship has been sunk!");
                    this.shipsSunk++;
                }
                return true;
                //we have a hit (-1 will be returned if the indexOf method does not find a match);
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    generateShip: function(){
        var direction = Math.floor(Math.random()*2);
        var row,col;

        if (direction===1){
            //horizontal
            row= Math.floor(Math.random() * this.boardSize);
            col= Math.floor(Math.random() * (this.boardSize-this.shipLength));
        }else{
            row = Math.floor(Math.random() * (this.boardSize-this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
            //vertical 
        }
    
        var newShipLocations =[];
        for (var i=0;i<this.shipLength;i++){
            if (direction===1){
                newShipLocations.push(row + "" + (col+i));
                //the the new locations to the empty array for horizontal ships?
            }else{
                newShipLocations.push((row+i) + "" +col);
                //add the new locations to the empty array for vertical ships?
            }
        }
        return newShipLocations;
    },
    isSunk: function(ship){
        for (var i= 0;i<this.shipLength;i++){
            if (ship.hits[i] !== "hit"){
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses:0,
    processGuess: function(guess){
        var location = parseGuess(guess);
        if (location){
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips){
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
    
};

function parseGuess(guess){
    var alphabet = ["A","B","C","D","E","F","G"];
    //We construct an array with the 7 letters of the alphabet to match the user's input: eg. g3.
    if (guess===null || guess.length!==2){
        //if the user's guess/input is null or the length is not 2 eg. b3(we accept only two strings).
        alert("Oops, please enter a letter and a number on the board.");
    }else{
        var firstChar = guess.charAt(0);
        //we create a variable which stores the first letter of the two letter input.
        var row = alphabet.indexOf(firstChar);
        //next we make a new variable row, which will be the return index of the match
        //of the first instance of the first letter. eg. If the user entered g3, then
        //the index that will be return is 6, since the letter g, matches the the 6th index
        //of the alphabet array.
        var column = guess.charAt(1);
        //we create a new variable "column" which stores the second letter of the user's input.
        if (isNaN(row) || isNaN(column)){
            alert("Oops, that isn't on the board.");
            //if any of the two characters is not a number, we alert an error message.
        }else if (row<0 || row>=model.boardSize || column<0 || column>=model.boardSize){
            // if any of the characters eg. 03 is less than 0, or bigger than the size of
            // of the board, in this case seven, alert an error message. 
            alert("Oops, that's off the board!");
        }else {
            return row + column;
            //if all went well return the concatenated strings row + column.
        }

    }
    return null;
    //in case of error return null.
}
    //update view and model

// var ships = [{
//     locations: ["06","16","26"],
//     hits: ["hit","hit","hit"]},
//     {locations: ["24","34","44"],
//     hits: ["hit","hit",""]},
//     {locations: ["10","11","12"],
//     hits: ["hit","","hit"]}
// ];

// guess ="16";
// locations = ["06", "16", "26"];

// for (var i =0;i<this.numShips;i++){
//     var ship = this.ships[i];
//     locations = ship.locations;
//     var index = locations.indexOf(guess);
//     if (index>=0){
//         //we have a hit (-1 will be returned if the indexOf method does not find a match);
//     }
// }
    

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("Puri Piri Pi, Puri Iksha PI");

// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("02");
// model.fire("11");
// model.fire("10"); 

// let test = controller.processGuess("A0");
// console.log(test);
// console.log(controller.processGuess("B6"));
// console.log(controller.processGuess("G3"));
// console.log(controller.processGuess("H0"));
// console.log(controller.processGuess("A7"));

// controller.processGuess("A0");
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

function init(){
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}

function handleKeyPress(e){
    var fireButton = document.getElementById("fireButton");
    if  (e.keyCode ===13){
        fireButton.click();
        return false;
    }
}

function handleFireButton(){
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value="";

}

window.onload =init;