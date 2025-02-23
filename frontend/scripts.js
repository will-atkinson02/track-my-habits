var ctx = document.getElementById('weekly-graph').getContext('2d');

const weeklyData = [20, 15, 10, 15, 15, 20, 10]
const max = 20
const min = 0

var barChart = new Chart(ctx, {
type: 'bar', 
data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [{
    label: 'Votes',
    data: weeklyData, 
    backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    scales: {
        y: {
            ticks: {
                stepSize: (max - min) / 5
            },
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
          display: false
        }
      }
    }
});
