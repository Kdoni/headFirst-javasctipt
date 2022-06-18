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
        locations: ["06","16","26"],
        hits: ["hit","hit","hit"]},
        {locations: ["24","34","44"],
        hits: ["hit","hit",""]},
        {locations: ["10","11","12"],
        hits: ["hit","","hit"]}
    ],
    shipsSunk: 0,
    shipLength: 3,
    fire: function(guess){
        for (var i =0;i<this.numShips;i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index>=0){
                ship.hits[index] = "hit";
                if (this.isSunk(ship)){
                    this.shipsSunk++;
                }
                return true;
                //we have a hit (-1 will be returned if the indexOf method does not find a match);
            }
        }
        return false;
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

// var ships = [{
//     locations: ["06","16","26"],
//     hits: ["hit","hit","hit"]},
//     {locations: ["24","34","44"],
//     hits: ["hit","hit",""]},
//     {locations: ["10","11","12"],
//     hits: ["hit","","hit"]}
// ];

guess ="16";
locations = ["06", "16", "26"];

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