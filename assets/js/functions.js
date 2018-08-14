Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: 'aquamarine'}
}

var data = [trace1,trace2];

var layout = {
    title: 'Basic Time Series',
    autosize: true,
    plot_bgcolor: 'slategrey',
    paper_bgcolor: 'slategrey',
    showlegend: false,
    height: 500,
    xaxis: {
        linecolor: 'black',
        linewidth: 2,
        mirror: true,
        autorange: 'true'
    },
    yaxis: {
        linecolor: 'black',
        linewidth: 2,
        mirror: true,
        autorange: true
    },
    margin:{
    l: 50,
    r: 50,
    b: 50,
    t: 50,
    pad: 4
}
};
    
var options ={
    showLink: false,
    displaylogo: false,
    modeBarButtonsToRemove: ['plotlyjsicon', 'select2d', 'sendDataToCloud', 'autoScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian','toggleSpikelines']
}

Plotly.newPlot('StocksGraph', data, layout, options);
})
    
window.onresize = function() {
    Plotly.relayout('StocksGraph', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
}
$(document).ready(function(){
    $(".navbar-nav .scroll-link").on('click', function (event) {
        $(".navbar-collapse").collapse('hide');
    });
})

$(document).ready(function () {
    $('.scroll-link').on('click', function (event) {
        event.preventDefault();

        var sectionID = $(this).attr("href");

        scrollToID(sectionID);
  });
    function scrollToID(id) {
        var offSet = 50;
        var targetOffset = $(id).offset().top - offSet;
        $('html,body').animate({ scrollTop: targetOffset }, 1000);
    }
});