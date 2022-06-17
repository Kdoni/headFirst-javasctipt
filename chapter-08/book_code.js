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

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Puri Piri Pi, Puri Iksha PI");