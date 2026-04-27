import Chart from 'react-apexcharts';

export default function ChartComponent({ series, categories }) {
    var options = {
        title: {
            text: "Grafik Pemasukan dan Pengeluaran 10 Hari Terakhir",
            align: "center"
        },
        xaxis: {
            type: "datetime"
        },
        chart: {
            id:'Test',
            toolbar: {
                show: false
            }
        },
        series: series,
        xaxis: {
            categories: categories
        },
        yaxis: {
            labels: {
                formatter: (value) => {
                    return new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR"
                    }).format(value);
                }
            }
        },
        colors: ["#2ECC71", "#E63946"]
    }
    return (
        <div className='card bg-base-100 shadow-sm'>
            <div className='card-body'>
                <Chart 
                    options={options}
                    series={options.series}
                    type='line'
                    width="100%"
                />
            </div>
        </div>
    )
}