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
  if (d.content.length > 31 && document.documentElement.clientWidth <= 375) {
    const splitPoint = d.content.split(" ");
    return [
      [splitPoint.slice(0, splitPoint.length / 2).join(" ")],
      [splitPoint.slice((splitPoint.length / 2)).join(" ")],
    ];
  }
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
      backgroundColor: theme.colors.blue_component_color,
      barThickness: document.documentElement.clientWidth <= 375 ? 5 : 10,
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
          family: `${theme.fonts.families.text}`,
          weight: `${theme.fonts.weights.normal}`,
          size: 12,
          lineHeight: "14px",
        },
      },
    },
    datalabels: {
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 58);
        return {
          size: document.documentElement.clientWidth < 690 ? size : "12px",
        };
      },
      anchor: "end",
      align: "right",
      color: `${theme.colors.black_text_color}`,
    },
  },
  layout: {
    padding: {
      right: document.documentElement.clientWidth < 690 ? 20 : 45,
      left: document.documentElement.clientWidth < 690 ? 20 : 34,
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
        stepSize: 1,
        color: theme.colors.black_text_color,
        padding: 8,
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 58);
          return {
            size: document.documentElement.clientWidth < 690 ? size : "12px",
          };
        },
      },
      grid: {
        display: true,
        drawOnChartArea: false,
        drawBorder: false,
        drawTicks: false,
        color: theme.colors.black_text_color,
      },
    },
  },
};
