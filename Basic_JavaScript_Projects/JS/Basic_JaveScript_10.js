// Loop 1

function funct1() {
    var timerun = "";
    var X = 1;
    while (X < 31) {
        timerun += X;
        X++;
    }
    document.getElementById("Loop").innerHTML = timerun;
}

// Length

function funct2() {
    var str = "It's alive!";
    var Y = str.length;
    document.getElementById("alive").innerHTML = Y;
}

// For Loop

var Car = ["Nissian", "Jeep", "Ford", "Toyota", "Dodge", "Fiat", "Volkswagon"];
var List = "";
var Z;
    function funct3() {
        for (Z = 0; Z < Car.length; Z++) {
            List += Car[Z] + "<br>";
        }
        document.getElementById("carlist").innerHTML = List;
    }

// Array

function funct4() {
    var pharm_pic = [];
    pharm_pic[0] = "Outside";
    pharm_pic[1] = "Inside";
    pharm_pic[2] = "Light";
    pharm_pic[3] = "Dark";
    document.getElementById("pharm").innerHTML = "In this picture the setting is " + pharm_pic[1] + ".";
}

// Constant

function funct5() {
    const Truck = {type:"Ford", color:"black", doors:"four"};
    Truck.type = "Ram";
    Truck.price = "$80,000";
    document.getElementById("cnstnt").innerHTML = "The truck type used to be Ford. Now it's " + Truck.type + " It also costs " + Truck.price;
}

// Let

function funct6() {
    let A = "Here we are";
    document.getElementById("displet").innerHTML = A;
}

// Return

function funct7() {
    return Math.PI;
}
  
document.getElementById("rtrn").innerHTML = funct7();

// Object

let Guitar = {make:"Fender ", model:"Vintage ", color:"Red ", year:"1970 ",
description: function() {return "This is a " + this.make + this.model + this.color + this.year + "guitar"}
}
document.getElementById("letobjt").innerHTML = Guitar.description();

// Break Loop

function funct8() {
    var loto_numb = "";
    var D = 0;
    while (D < 10) {
        loto_numb += "<br>The first number is " + D;
        D++;
        if (D === 8) {
            break;
        }
    }
    document.getElementById("loto").innerHTML = loto_numb;
}

// Continue Loop

function funct9() {
    var loto_num2 = "";
    var C = 2;
    while (C < 20) {
        loto_num2 += "<br>The first number is " + C;
        C++;
        if (C === 8) {
            continue;
        }
    }
    document.getElementById("loto2").innerHTML = loto_num2;
}