/* eslint-disable */

import { overallChartData } from "../../charts";

const tempoData = {
  labels: ["Tempo"],
  datasets: [
    {
      label: "Tempo",
      backgroundColor: [
        randomColor({
          format: "rgba",
          alpha: 0.7,
          luminosity: "light",
        }),
      ],
      borderColor: "rgb(230,230,230)",
      data: [overallChartData.tempo],
      hoverOffset: 4,
    },
  ],
};

export const tempoConfig = {
  type: "bar",
  data: tempoData,
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Average Tempo of your Recently Played Songs",
      },
    },
  },
};
