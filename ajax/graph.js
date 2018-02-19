//Need canvasjs and script.js to work
$(document).ready(function() {
    var dps = []; // dataPoints
    var dataLength = 20; // number of dataPoints visible at any point
    var chart = new CanvasJS.Chart("chart", {
        axisY: {
            title: 'Euro',
            includeZero: false
        },
        axisX: {
            title: 'Date/Heure'
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    function updateChart(data) {
        dps.push({x: dt, y: data.bpi.EUR.rate_float}); // Append new dps
        if (dps.length > dataLength) {
            dps.shift(); // Remove first dps
        }
        chart.render(); // Render chart
    }
    update = function(data) {
        dt = updateTime();
        updateInfo(data);
        updateChart(data);
    };
});
