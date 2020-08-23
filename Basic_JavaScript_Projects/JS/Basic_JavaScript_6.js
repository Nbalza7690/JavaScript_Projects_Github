function ride_function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
} 

function vote_function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote_status").innerHTML = can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Laptop(Mfgr, Specs, Year, Size) {
    this.Laptop_Mfgr = Mfgr;
    this.Laptop_Specs = Specs;
    this.Laptop_Year = Year;
    this.Laptop_Size = Size;
}

var Nick = new Laptop("HP", "64bit", 2020, 15.6);

function Java6fctn() {
    document.getElementById("New_and_This").innerHTML = 
    "Nick ownes a laptop from " + Nick.Laptop_Mfgr + " it is " + Nick.Laptop_Specs + " and was made in the year " + Nick.Laptop_Year;
}

function Mathpwr() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var First_Number = 2;
        function pwrtwo() {First_Number *= 4;}
        pwrtwo();
        return First_Number;
    }
}