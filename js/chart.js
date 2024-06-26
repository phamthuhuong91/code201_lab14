'use strict';

let canvasElem = document.getElementById('chart');

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

let state = new AppState();
state.loadItems();

function renderChart() {

  const ctx = canvasElem.getContext('2d');

  // Chart.js configuration
  const chartData = {
    labels: state.allProducts.map(obj => obj.name),
    datasets: [{
      label: 'Votes',
      data: state.allProducts.map(obj => obj.timesClicked)
    },
    {
      label: 'Views',
      data: state.allProducts.map(obj => obj.timesShown)
    }]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Create the chart
  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
}

renderChart();
