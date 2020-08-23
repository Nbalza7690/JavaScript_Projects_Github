// Switch Statement

function funct1() {
    var band_output;
    var Band = document.getElementById("band_input").value; // remember to check if node value works vs just value
    var band_string = " is a great band for sure!";
    switch(Band) {
        case "Social Distortion":
            band_output = "Social Distortion" + band_string;
        break;
        case "Me First and the Gimme Gimmes":
            band_output = "Me First and the Gimme Gimmes" + band_string;
        break;
        case "The Creepshow":
            band_output = "The Creepshow" + band_string;
        break;
        case "T.S.O.L.":
            band_output = "T.S.O.L." + band_string;
        break;
        case "NOFX":
            band_output = "NOFX" + band_string;
        break;
        case "The Distillers":
            band_output = "The Distillers" + band_string;
        break
        default: band_output = "Please type a name as it is seen.";
    }
    document.getElementById("output").innerHTML = band_output;
}

// Get by Class

function funct2() {
    var X = document.getElementsByClassName("change_me");
    X[0].innerHTML = "Why are you clicking down there? Pick a band first!";
}

// Canvas

var c = document.getElementById("canvas1");
var drw = c.getContext("2d");

var grd = drw.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0,"green");
grd.addColorStop(1,"orange");

drw.fillStyle = grd;
drw.fillRect(0,0,400,200);