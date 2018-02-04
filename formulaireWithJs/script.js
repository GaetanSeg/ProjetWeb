function getRandomInt() {

  return Math.round(Math.random() * 10 );
}
var nombre=getRandomInt(10);

console.log(nombre);
function clickEvent() {

var nbr = document.getElementById("numb").value;

  if (nbr>nombre) {
    alert('votre nombre est trop grand');
    return false;

  }else if(nbr<nombre){

    alert('votre nombre est trop petit');
    return false;

  }else if (nbr == nombre) {

    alert('Bingo!');
    return true;
  }

}
