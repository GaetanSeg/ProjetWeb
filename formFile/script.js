function myFile() {
  var file = document.getElementById('file').files[0];
  var reader = new FileReader();

  reader.onload = function(event) {
    document.getElementById('test').innerHTML = event.target.result;
  };

  reader.readAsText(file);

}
