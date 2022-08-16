 //console.log(cityGrowths)

// To Do
/*
1. Sort the cities in descending order of population growth.
2. Select only the top five cities in terms of growth.
3. Create separate arrays for the city names and their population growths.
4. Use Plotly to create a bar chart with these arrays.
*/

// Sort and select cities (1 and 2)
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
var topFive = sortedCities.slice(0,5);

// Create separate arrays
var topFiveCityNames = topFive.map(name => name.City);
var topFiveCityGrowth = topFive.map(num => parseInt(num.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowth,
    type: 'bar'
};

var layout = {
    title: 'Growth by City (Top Five)',
    xaxis: {title: 'City'},
    yaxis: {title: 'Pop. Increase From 2016'}
};

Plotly.newPlot('bar-plot', [trace], layout);