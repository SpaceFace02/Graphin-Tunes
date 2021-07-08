// Polar-area chart

/* eslint-disable */

import { overallChartData } from "../../charts";

const dataOverallPolar = {
  labels: ["Danceability", "Valence", "Energy"],
  datasets: [
    {
      label: "Polar Chart",
      backgroundColor: [
        randomColor({
          hue: "red",
          format: "rgba",
          luminosity: "light",
        }),
        randomColor({
          hue: "green",
          format: "rgba",
          luminosity: "light",
        }),
        randomColor({
          hue: "orange",
          format: "rgba",
          alpha: 0.85,
          luminosity: "light",
        }),
      ],
      borderColor: "rgb(230,230,230)",
      data: [
        overallChartData.danceability,
        overallChartData.valence,
        overallChartData.energy,
      ],
      hoverOffset: 4,
    },
  ],
};

export const polarConfig = {
  type: "polarArea",
  data: dataOverallPolar,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Non-Studio Features",
      },
    },
  },
};
