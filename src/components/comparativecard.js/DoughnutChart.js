import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DoughnutChart = () => {
  const chartData = {
    options: {
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '70%', // Adjust the size of the donut hole
          },
        },
      },
      colors: ['#032282', '#EDE1FF', '#F4BE37'], // Background colors
    },
    series: [76, 32, 32], // Specify your percentages here
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={250}
      />
    </div>
  );
};

export default DoughnutChart;
