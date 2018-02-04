//On récupère la date actuelle sous forme littérale
var datelit = Date();

//On récupère le nb de ms écoulées depuis le 1 janvier 1970
var datems = Date.now();

//On affiche ces deux écritures d'une même date :
alert('Date littérale : ' + datelit +
      '\nDate sous forme de ms : ' + datems);
