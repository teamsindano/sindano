import { data } from "./data";
import { theme } from "./Theme";

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
          }
        },
        yAxis: {
          grid: {
            display: false,
          }
        },
      },
    },
  };
  