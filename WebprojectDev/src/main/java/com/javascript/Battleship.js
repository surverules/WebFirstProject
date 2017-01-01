/**
 * Created by surverules on 12/30/2016.
 */



var view = {
    displayMessage : function (message){
        document.getElementById(anyMessage).innerHTML = message;
    },
    setPropertyForHit: function (cellPostition) {
        document.getElementById(cellPostition).setAttribute("class", "hit");
    },
    setPropertyForMiss: function (cellPostition) {
        document.getElementById(cellPostition).setAttribute("class", "miss");
    }
}

function  checkOption(location) {
    var ArrayChar = ["A", "B", "C", "D", "E", "F", "G"];
    for (var i = 0; i < ArrayChar.length; i ++) {
        if (location.substr(0,1) === ArrayChar[i]){
            return ArrayChar[i].concat(location.substr(1,1))
        }
    }
}

var model = {
    boardSize: 7,
    numShips: 3,
    shipLenght: 3,
    shipsSunk: 0,
    ships : [
            {location: [01, 11, 21], hits: ["", "", ""]},
            {location: [03, 13, 23], hits: ["", "", ""]},
            {location: [04, 14, 24], hits: ["", "", ""]}
        ],
    fire: function (incodedLocation){
            var i = 0;
            while(i < this.ships.length) {
                var ship = this.ships[i];
                var index = ship.location.indexOf(incodedLocation)
                if (index >=0) {
                    ship.hits[index] = "hit";
                    view.setPropertyForHit(incodedLocation);
                    if (this.isSunk(ship)){
                        this.shipsSunk ++;
                    }
                    return true;
                }
            }
            view.setPropertyForMiss(incodedLocation);
            return false;
            },
    isSunk: function (ship){
        for (i = 0; i <=ship.hits.length; i++){
            if (ship.hits[i] != "hit"){
                return false;
            }
        }
        return true;
    }
}

model.fire(01);
model.fire(02);