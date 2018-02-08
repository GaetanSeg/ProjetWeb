function randomValue() {
    var random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    return random;
}
var random = randomValue();

function checkResult(e) {
    var number = e.elements.namedItem('number').value;
    if (number > random) {
        alert("Trop grand");
        return false;
    }
    else if (number < random) {
        alert("Trop petit");
        return false;
    }
    else {
        alert("Bingo !");
        var restart = confirm("Voulez-vous rejouer ?");
        if (restart)
        {
            random = randomValue();
        }
    }
}
