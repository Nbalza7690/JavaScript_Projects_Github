/* Concatenate */

function funct1() {
    var pt_1 = "Here is";
    var pt_2 = " the sentence";
    var pt_3 = " that you";
    var pt_4 = " have requested.";
    var all_pts = pt_1.concat(pt_2, pt_3,pt_4);
    document.getElementById("concat").innerHTML = all_pts;
}

/* Slice */

function funct2() {
    var sentence = "This is the sentence you will get a piece of.";
    var section = sentence.slice(36, 41);
    document.getElementById("slice").innerHTML = section;
}

/* Uppercase */

function funct3() {
    var string = "Make me all uppercase!";
    var uppercse = string.toUpperCase();
    document.getElementById("upper").innerHTML = uppercse;
}

/* Search */

function funct4() {
    var strn = "What position is the final word of this sentence?";
    var X = strn.search("sentence");
    document.getElementById("srch").innerHTML = X;
}

/* To String */

function funct5() {
    var Y = 45;
    document.getElementById("change").innerHTML = Y.toString();
}

/* To Precision */

function funct6() {
    var Z = 398352.5925432;
    document.getElementById("roundup").innerHTML = Z.toPrecision(8);
}

/* To Fixed */

function funct7() {
    var numb = 19.34567;
    var A = numb.toFixed(3);
    document.getElementById("fixed").innerHTML = A;
}

/* Value Of */

function funct8() {
    var num = 19.34567;
    var B = num.valueOf();
    document.getElementById("prim").innerHTML = B;
}