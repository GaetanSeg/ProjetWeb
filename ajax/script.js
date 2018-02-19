//Need jQuery to work
var updateInterval = 10000; // update interval
var dt = null; // datetime

function updateTime() {
    return new Date(); // now
}

function updateInfo(data) {
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $('#refresh').text(dt);
    $('#updated').text(data.time.updated);
    $('#euro').text(data.bpi.EUR.rate + " " + $($.parseHTML(data.bpi.EUR.symbol)).text());
    $('#dollar').text(data.bpi.USD.rate + " " + $($.parseHTML(data.bpi.USD.symbol)).text());
    //https://stackoverflow.com/questions/19443345/convert-html-string-into-jquery-object/32631396
}

function update(data) {
    dt = updateTime();
    updateInfo(data);
}

function sendRequest() {
    $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json", // webservice url (return json)
        dataType: 'json', // Specify datatype
        success: // If success
        function(result){
            update(result);
            setTimeout(
                sendRequest, //this will send request again and again;
                updateInterval);
        }
    });
}

$(document).ready(function() {
    sendRequest(); // Call sendRequest only once
});
