function update(result) {
    var dt = new Date();
    $('#refresh').text(dt);
    $('#updated').text(result.time.updated);
    $('#euro').text(result.bpi.EUR.rate_float);
    $('#dollar').text(result.bpi.USD.rate_float);

}

function sendRequest(){

      $.ajax({
              url : "https://api.coindesk.com/v1/bpi/currentprice.json",
              dataType: 'json',
              success : function(result) {
                update(result);
                setTimeout(function(){sendRequest(); },3000);
            }
    });
}

$(document).ready(function() {
  sendRequest();
});
