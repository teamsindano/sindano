import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
import { data } from "./data";
import { theme } from "../Components/Theme";

/**
 * The Chart Component's Config
 * @author [Sam](https://github.com/Samm96)
 *
 * look at this for how to use Chart.js <https://www.chartjs.org/docs/latest/getting-started/usage.html>
 */

const labels = data.chartStats.map((d) => {
  return d.content;
});

const numbers = data.chartStats.map((d) => {
  return d.number;
});

export const barOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderRadius: 2,
        barThickness: 12,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: false,
    },
    scales: {
      xAxis: {
        ticks:{
          beginAtZero: false,
        },
        grid: {
          display: true,
          drawOnChartArea: false,
          drawBorder: false,
          drawTicks: false,
        },
      },
      yAxis: {
        ticks:{
          autoSkip: false,
          beginAtZero: true,
          stepSize: 1,
        },
        grid: {
          display: true,
          drawOnChartArea: false,
          drawBorder: false,
          drawTicks: false,
        },
      },
    },
  };

export const barData = {
  labels: labels,
  datasets: [
    {
      data: numbers,
      backgroundColor: theme.colors.default_component_blue,
      font: {
        family: `${theme.fonts.text.font_family[0]}`,
        weight: `${theme.fonts.text.weights.normal}`,
        size: 12,
        lineHeight: 14,
      },
    },
  ],
};

// export const config = {
//   options: {
//     elements: {
//       bar: {
//         borderRadius: 2,
//       },
//     },
//     plugins: {
//       title: {
//         display: false,
//       },
//       legend: false,
//     },
//     indexAxis: "y",
//     scales: {
//       xAxis: {
//         grid: {
//           display: true,
//           drawOnChartArea: false,
//           drawBorder: false,
//           drawTicks: false,
//         },
//       },
//       yAxis: {
//         grid: {
//           display: true,
//           drawOnChartArea: false,
//           drawBorder: false,
//           drawTicks: false,
//         },
//       },
//     },
//   },
// };
