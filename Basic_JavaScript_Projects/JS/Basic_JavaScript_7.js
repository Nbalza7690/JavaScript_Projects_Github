var X = "Global"

function funct1() {
    document.getElementById("butn1").innerHTML = X;
}

function funct2() {
    var Y = "Local"
    document.getElementById("butn2").innerHTML = Y;
}

function funct3() {
    document.getElementById("butn33").innerHTML = console.log(X);
}

function funct4() {
    if (new Date().getHours() >= 12) {
        document.getElementById("yesorno").innerHTML = "Yup it sure is";
    }
}

function funct5() {
    if (5 < 10) {
        document.getElementById("multi").innerHTML = 5 * 10;
    }
}

function funct6() {
    age = document.getElementById("age").value;
    if (age == "Yes") {
        Allowed = "You many continue on to the site and browse our tobacco products.";
    }
    else {
        Allowed = "Acess to this site has been denied.";
    }
    document.getElementById("enter").innerHTML = Allowed;
}

function funct7() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It's the afternoon";
    }
    else {
        Reply = "It's evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}