/* eslint-disable */

import {
  individualChartData,
  shortenedLabels,
  allLabels,
  dataLoop,
} from "../../charts";

const data_danceability = dataLoop(individualChartData, "danceability");
const data_valence = dataLoop(individualChartData, "valence");
const data_energy = dataLoop(individualChartData, "energy");

const lineData = {
  labels: shortenedLabels,
  datasets: [
    {
      label: "Danceability",
      data: data_danceability,
      backgroundColor: randomColor({
        hue: "orange",
      }),

      borderColor: randomColor({
        hue: "orange",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
    {
      label: "Valence",
      data: data_valence,
      backgroundColor: randomColor({
        hue: "purple",
      }),

      borderColor: randomColor({
        hue: "purple",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
    {
      label: "Energy",
      data: data_energy,
      backgroundColor: randomColor({
        hue: "green",
      }),

      borderColor: randomColor({
        hue: "green",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
  ],
};

export const lineConfig = {
  type: "line",
  data: lineData,
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
    radius: 3,
    interaction: {
      intersect: false,
    },
  },
};
