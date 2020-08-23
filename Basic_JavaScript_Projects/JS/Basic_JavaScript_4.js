function my_dictionary() {
    var Car = {
        Engine:"v6",
        Frame:"box",
        Interior:"leather",
        Tires:"All-Weather"
    };
    delete Car.Frame;
    document.getElementById("Dictionary").innerHTML = Car.Frame;
}