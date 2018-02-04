var base = parseFloat(prompt('Quelle est votre montant de départ ?').replace(',','.'));
var taux = parseFloat(prompt('Quel est le taux (en %) sur base annuelle ?', 0.01).replace(',','.'));
var prime = parseFloat(prompt('Quel est la prime de fidélité (en %) sur base annuelle ?', 0.1).replace(',','.'));
taux = taux / 100;
prime = prime / 100;

console.log("Taux: " + taux);
console.log("Prime: " + prime);
document.write("<table class='table table-dark'>");
document.write("<thead><tr><th>Année</th><th>Montant total</th><th>Intérêt créditeur (" + taux * 100 + "%)</th><th>Prime de fidélité (" + prime * 100 + "%)</th></tr></thead>");
document.write("<tbody>");
var annee_taux = 0;
var annee_prime = 0;
for(var i=0; i <= 30; i++) {
    console.log("Année: " + i + " Montant: " + base);
    var annee = i ? i:'Montant de départ';
    document.write("<tr><td>" + annee + "</td><td>" + base.toFixed(2) + "</td><td>" + annee_taux.toFixed(2) + "</td><td>" + annee_prime.toFixed(2) + "</td>");
    //http://www.supinfo.com/articles/single/1415-problemes-que-posent-nombres-decimaux-programmation
    annee_taux = base * taux;
    annee_prime = base * prime;
    base += annee_taux + annee_prime;
}
document.write("</tbody></table>");
