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
        {location: [01, 11, 21], hits: ["", "", ""]},
        {location: [01, 11, 21], hits: ["", "", ""]},
        {location: [01, 11, 21], hits: ["", "", ""]}
        ]
