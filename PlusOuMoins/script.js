
function randomValue() {
    var random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    return random;
}
var random = randomValue();

function checkResult(e) {
    var number = document.getElementById('number').value;
    if (number > random) {
        alert("Trop grand :( ");
        return false;
    }
    else if (number < random) {
        alert("Trop petit :( ");
        return false;
    }
    else {
        alert("Bravo ! /(^_^)/" );
        var restart = confirm("Voulez-vous rejouer une autre partie ?");
        if (restart)
        {
            random = randomValue();
        }
    }
}
