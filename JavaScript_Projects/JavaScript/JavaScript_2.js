// Validation

function val_fields() {
    var F = document.forms["form1"]["first_name"].value;
    var L = document.forms["form1"]["last_name"].value;
    var D = document.forms["form1"]["dob"].value;
    var E = document.forms["form1"]["email"].value;
    if (F == "") {
        alert("First name must be filled out");
        return false;
    }
    if (L == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (D == "") {
        alert("Date of birth must be filled out");
        return false;
    }
    if (E == "") {
        alert("Email must be filled out");
        return false;
    }
}