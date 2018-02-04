var tauxDepart = 0.01;
var primeDepart = 0.1;
var maxAge = 38;
var decimal = 5;
// Retourne un dict contenant la base, le taux et la prime reçu en input
function getInformations() {
    var base = parseFloat(prompt('Quelle est votre montant de départ ?').replace(',','.'));
    var taux = parseFloat(prompt('Quel est le taux (en %) sur base annuelle ?', tauxDepart).replace(',','.'));
    var prime = parseFloat(prompt('Quel est la prime de fidélité (en %) sur base annuelle ?', primeDepart).replace(',','.'));
    taux = taux / 100;
    prime = prime / 100;
    return {"base": base, "taux": taux, "prime": prime};
}

// Retourne un dict contenant la croissance du compte (clé: annee, valeur: dict)
function getGrowth(data) {
    var anneeTaux = 0;
    var anneePrime = 0;
    var base = data.base;
    var dict = {};
    for(var i=0; i <= maxAge; i++) {
        dict[i] = {"montant": base, "taux": anneeTaux, "prime": anneePrime};
        anneeTaux = base * data.taux;
        anneePrime = base * data.prime;
        base += anneeTaux + anneePrime;
    }
    return dict;
}

// Retourne un tableau en html
function getTable(data) {
    // retourne les lignes d'un tableau en html
    function getRows(data) {
        var result = "";
        for(var i in data) {
            var annee = i !== '0' ? i:'Montant de départ';
            result += "<tr><td>" + annee + "</td><td>" + data[i].montant.toFixed(decimal) + "</td><td>" + data[i].taux.toFixed(decimal) + "</td><td>" + data[i].prime.toFixed(decimal) + "</td></tr>";
        }
        return result;
    }
    var growth = getGrowth(data);
    result = "<table class='table table-dark'>";
    result += "<thead><tr><th>Année</th><th>Montant total</th><th>Intérêt créditeur (" + data.taux * 100 + "%)</th><th>Prime de fidélité (" + data.prime * 100 + "%)</th></tr></thead>";
    result += "<tbody>";
    result += getRows(growth);
    result += "</tbody></table>";
    return result;
}

// Ecrit l'html envoyé en paramètre dans le document
function render(html) {
    document.getElementById('table').innerHTML = html;
}

function generateTable() {
    var infos = getInformations();
    render(getTable(infos));
}
generateTable(); éaaaaaaaaaaaaaaaaa&bvvvvvvvvvvvvvv
