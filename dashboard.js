// Dados para os gráficos
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Revenue',
        data: [100, 200, 150, 300, 250, 400],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4
    }]
};

const barChartData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [{
        label: 'Sales',
        data: [50, 75, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

// Inicializa os gráficos
new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: lineChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});
