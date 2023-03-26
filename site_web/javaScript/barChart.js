import Chart from 'chart.js/auto';

const labels = [
  'Surface artificialisée - Isère',
  'Population - Isère',
  'Surface artificialisée -Rhône',
  'Population - Rhône',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Taux d\'évolution en %',
    data: [11.48, 4.75, 5.16, 5.58],
    backgroundColor: [
      'rgb(128,0,128, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgb(128,0,128, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgb(0, 0, 255)',
      'rgb(0, 0, 255)',
      'rgb(255, 0, 0)',
      'rgb(255, 0, 0)',
    ],
    borderWidth: 2
  }]
};

const chartTitle = ['Taux d\'évolution des Surfaces artificialisées et de la Population entre 2006 et 2012'];
const chartSubtitle = ['Source: Corine Land Cover 2006-2012 & INSEE - Recensement population 2006-2012'];

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      title: {
        display: true,
        text: chartTitle,
        padding: {
          top: 30,
          bottom: 5
        }
      },
      subtitle: {
        display: true,
        text: chartSubtitle
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myBarChart'),
  config
);
