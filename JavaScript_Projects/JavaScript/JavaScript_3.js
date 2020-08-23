// Data Attributes

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in " + character.innerHTML);
}