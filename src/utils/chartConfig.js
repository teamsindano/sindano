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
      color: theme.colors.default_text_color,
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

export const config = {
  type: "bar",
  data: barData,
  options: {
    elements: {
      bar: {
        borderRadius: 2,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: false,
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
