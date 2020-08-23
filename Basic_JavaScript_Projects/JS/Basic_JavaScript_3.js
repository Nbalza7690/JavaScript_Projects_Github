function mthadd() {
    var addition = 5 + 5;
    document.getElementById("mthpblm").innerHTML = addition;
}

function mthsub() {
    var subtraction = 10 - 5;
    document.getElementById("subpblm").innerHTML = subtraction
}

function mthdiv() {
    var division = 10 / 2;
    document.getElementById("divpblm").innerHTML = division
}

function mthmult() {
    var multply = 2 * 5;
    document.getElementById("multpblm").innerHTML = multply
}

function smplmth() {
    var var_math = (0 + 5) * 4 / 2 -5;
    document.getElementById("simplemath").innerHTML = var_math
}

function modop() {
    var mod_math = 25 % 15;
    document.getElementById("modpblm").innerHTML = mod_math
}

function negmth() {
    var neg_math = 10;
    document.getElementById("negpblm").innerHTML = -neg_math
}

function plusmth() {
    var A = 4;
    A++;
    document.getElementById("plspblm").innerHTML = A
}

function submth() {
    var B = 11;
    B--;
    document.getElementById("subpblm2").innerHTML = B
}

function rndmmth() {
    var C = Math.random() * 10;
    document.getElementById("rndmpblm").innerHTML = C
}

function powmth() {
    var D = Math.pow(2, 2);
    document.getElementById("powpblm").innerHTML = D
}