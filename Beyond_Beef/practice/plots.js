// Line plot
Plotly.newPlot("plotLine", [{x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [10, 20, 30, 45, 34, 23, 12, 19, 2, 0]}]);

// bar chart
var barData = {
    x : ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y : [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var barLayout = {
    title: "Drink Sales",
    xaxis: {title: "Drink Option"},
    yaxis: {title: "% Ordered"}
};
Plotly.newPlot("plotBar", [barData], barLayout);

// pie chart
var pieData = {
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    type: 'pie'
};
var pieLayout = {
    title: "nonBoozy Pie"
};
Plotly.newPlot("plotPie", [pieData], pieLayout);

// scatterplot
var beerSales = {
    x: [1, 2, 3, 4, 5],
    y: [22.7, 18.6, 15.4, 19.8, 24.5],
    mode: 'markers',
    type: 'scatter'
};

var wineSales = {
    x: [1, 2, 3, 4, 5],
    y: [14.7, 12.2, 8.6, 14.9, 18.6],
    mode: 'lines',
    type: 'scatter'
};

var spiritSales = {
    x: [1, 2, 3, 4, 5],
    y: [6.7, 8.9, 3.3, 7.8, 11.2],
    mode: 'lines+markers',
    type: 'scatter'
};

var scatterData = [beerSales, wineSales, spiritSales];

var scatterLayout = {
    xaxis: {title: 'Days'},
    yaxis: {title: 'Dollars'},
    title: 'Abysmal Drink Sales'
};

Plotly.newPlot('barScatter', scatterData, scatterLayout);