import Chart from "chart.js/auto";
import { data } from "./data";
import { theme } from "../Components/Theme";

const labels = data.chartStats.map((d) => {
  return d.content;
});

const numbers = data.chartStats.map((d) => {
  return d.number;
});

const barData = {
  labels: labels,
  datasets: [
    {
      data: numbers,
    },
  ],
};

Chart.defaults.backgroundColor = theme.colors.default_component_blue;

export const config = {
  type: "bar",
  data: barData,
  options: {
    plugins: {
      title: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
      },
      yAxis: {
        grid: {
          display: false,
        },
      },
    },
  },
};
