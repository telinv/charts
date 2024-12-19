const data = {
    'row-revenue': {
        name: 'Выручка',
        values: [0, 480521, 480512, 500521]
    },
    'row-cash': {
        name: 'Наличные',
        values: [0, 300000, 300000, 300000]
    },
    'row-non-cash': {
        name: 'Безналичный расчет',
        values: [0, 100000, 100000, 100000]
    },
    'row-credit-card': {
        name: 'Кредитные карты',
        values: [0, 100521, 100521, 100521]
    },
    'row-average-receipt': {
        name: 'Средний чек, руб',
        values: [0, 900, 900, 1300]
    },
    'row-average-guests': {
        name: 'Средний гость, руб',
        values: [0, 800, 800, 1200]
    },
    'row-after-payment': {
        name: 'Удаление из чека (после оплаты), руб',
        values: [0, 900, 1100, 1000]
    },
    'row-before-payment': {
        name: 'Удаление из чека (до оплаты), руб',
        values: [0, 900, 1300,1300]
    },
    'row-receipt': {
        name: 'Количество чеков',
        values: [0, 34, 36, 34]
    },
    'row-guests': {
        name: 'Количество гостей',
        values: [0, 32, 36, 34]
    },
};

const chart = Highcharts.chart('container', {
    title: {
        text: '',
    },
    subtitle: {
        text: '',
    },
    yAxis: {
        title: {
            text: '',
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: last week to today'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 0,
        }
    },
    series: [{
        name: '',
        data: []
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

const rows = document.querySelectorAll('tr[id^="row-"]'); 
rows.forEach(row => {
    row.addEventListener('click', function() {
        const rowId = this.id;
        if (data[rowId]) {
            const { name, values } = data[rowId];
            chart.update({
                title: {
                    text: name
                },
                series: [{
                    name: name,
                    data: values
                }]
            });
        }
    });
});
