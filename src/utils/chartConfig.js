import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
import { data } from "./data";
import { theme } from "../Components/Theme";

/**
 * The Chart Component's Config
 * @author [Sam](https://github.com/Samm96)
 *
 * look at this for how to use Chart.js <https://www.chartjs.org/docs/latest/getting-started/usage.html>
 * <https://react-chartjs-2.js.org/docs/migration-to-v4/>
 */

const labels = data.chartStats.map((d) => {
  return d.content;
});

const numbers = data.chartStats.map((d) => {
  return d.number;
});

export const barData = {
  labels: labels,
  datasets: [
    {
      data: numbers,
      backgroundColor: theme.colors.default_component_blue,
      barThickness: 12,
    },
  ],
};

export const barOptions = {
    maintainAspectRatio: false,
    indexAxis: "y",
    elements: {
      bar: {
        borderRadius: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
        labels: {
          font: {
            family: `${theme.fonts.text.font_family[0]}`,
            weight: `${theme.fonts.text.weights.normal}`,
            size: 12,
            lineHeight: "14px",
          },
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: `${theme.colors.default_text_color}`,
      },
    },
    scales: {
      xAxis: {
        ticks:{
          display: false,
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
          color: theme.colors.default_text_color,
          padding: 8,
        },
        grid: {
          display: true,
          drawOnChartArea: false,
          drawBorder: false,
          drawTicks: false,
          color: theme.colors.default_text_color,
        },
      },
    },

  };