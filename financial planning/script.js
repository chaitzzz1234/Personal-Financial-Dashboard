// Expense Trends Chart
const ctx1 = document.getElementById('lineChart').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [6200, 6400, 6300, 6700, 6600, 6750],
        borderColor: 'green',
        fill: true,
        backgroundColor: 'rgba(0, 200, 0, 0.1)',
        tension: 0.3
      },
      {
        label: 'Expenses',
        data: [2000, 2100, 2500, 2300, 2400, 2200],
        borderColor: 'orange',
        fill: true,
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        tension: 0.3
      }
    ]
  },
  options: { responsive: true }
});

// Spending by Category Chart
const ctx2 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Food & Dining', 'Transportation', 'Entertainment', 'Utilities', 'Shopping', 'Healthcare'],
    datasets: [{
      data: [650, 420, 380, 320, 280, 199],
      backgroundColor: ['#FFB74D', '#64B5F6', '#81C784', '#AED581', '#BA68C8', '#E57373']
    }]
  },
  options: { responsive: true }
});
