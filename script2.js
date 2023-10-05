 // Sample data for the radar chart
 let data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [{
        label: 'Data Set',
        data: [10, 20, 30, 40, 50], // Replace with your own data values
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
    }]
};

// Radar chart configuration
let options = {
    scale: {
        angleLines: {
            display: true
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 60
        }
    }
};

// Get the canvas element and create the radar chart
let ctx = document.getElementById('myChart').getContext('2d');
let radarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});