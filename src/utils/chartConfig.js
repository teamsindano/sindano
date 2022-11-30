import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";
import { data } from "./data";
import { theme } from "../Components/Theme";

/**
 * The Chart Component's Config
 * @author [Sam](https://github.com/Samm96)
 *
 * Statistics chart config located in Main
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
      barThickness: function () {
        return document.documentElement.clientWidth < 375 ? 5 : 10;
      },
      borderRadius: 2,
      borderSkipped: false,
    },
  ],
};

export const barOptions = {
  maintainAspectRatio: false,
  indexAxis: "y",
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
          lineHeight: "14px",
        },
      },
    },
    datalabels: {
      font: function(context) {
        var width = context.chart.width;
        var size = Math.round(width / 70);
         return {
           size: document.documentElement.clientWidth < 375 ? size : "12px",
        };
      },
      anchor: "end",
      align: "right",
      color: `${theme.colors.default_text_color}`,
    },
  },
  layout: {
    padding: {
      right: 45,
      left: 34,
    },
  },
  scales: {
    xAxis: {
      ticks: {
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
      ticks: {
        autoSkip: false,
        beginAtZero: true,
        categoryPercentage: 0.5,
        barPercentage: 1,
        stepSize: 1,
        color: theme.colors.default_text_color,
        padding: 8,
        font: {
          size: function () {
            return document.documentElement.clientWidth < 375 ? 6 : 12;
          },
        },
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
