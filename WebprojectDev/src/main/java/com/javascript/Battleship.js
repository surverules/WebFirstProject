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


var ships = [
        {location: [01, 11, 21], hits: ["hit", "", ""]},
        {location: [03, 13, 23], hits: ["", "", ""]},
        {location: [04, 14, 24], hits: ["", "", ""]}
        ]

function  checkOption(location) {
    var ArrayChar = ["A", "B", "C", "D", "E", "F", "G"];
    for (var i = 0; i < ArrayChar.length; i ++) {
        if (location.substr(0,1) === ArrayChar[i]){
            return ArrayChar[i].concat(location.substr(1,1))
        }
    }
}