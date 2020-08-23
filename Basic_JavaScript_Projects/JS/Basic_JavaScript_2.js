var A = "Click this button"
document.write(A)
function color() {
    var B = document.getElementById("sample");
    B.style.color = "green";
}

function fun() {
    var sentence = "This text";
    sentence += " should show up after the click.";
    document.getElementById("concat").innerHTML = sentence;
}