function inf_function() {
    document.getElementById("infinity").innerHTML = 1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308;
}

function test_function() {
    document.getElementById("test").innerHTML = 0/0;
}

function true_function() {
    document.getElementById("true").innerHTML = isNaN("String")
}

function false_function() {
    document.getElementById("false").innerHTML = isNaN("84")
}

document.write(15 > 4);
document.write(15 < 4);

console.log(10 * 5);
console.log(10 < 4);

document.write("85" + 8);
document.write(10 == 10);
document.write(10 == 20);

X = 5;
Y = 5;
Z = 2;
A = "Five";
B = "Seven";
document.write(X === Y);
document.write(X === B);
document.write(X === A);
document.write(X === Z);

document.write(3 > 2 && 8 > 3);
document.write(5 > 1 && 4 >  5);
document.write(4 > 5 || 8 > 10);
document.write(4 > 3 || 9 > 10);

function not_function() {
    document.getElementById("nottrue").innerHTML = !(45 > 10);
}

function nottrue_function() {
    document.getElementById("not").innerHTML = !(10 > 45);
}