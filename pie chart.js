document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('pie_chart');

  new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Eggs', 'Chicken'],
      datasets: [{
        label: 'Sales summary',
        data: [12, 19],
        borderWidth: 1
      }]
  },
  options: {
      scales: {
      y: {
          beginAtZero: true
      }
      }
  }
  });
});