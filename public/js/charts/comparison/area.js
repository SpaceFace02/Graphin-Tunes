/* eslint-disable */

import { allLabels } from "../../charts";
import { shortenedLabels, individualChartData, dataLoop } from "../../charts";

const data_speechiness = dataLoop(individualChartData, "speechiness");
const data_liveness = dataLoop(individualChartData, "liveness");

const areaData = {
  labels: shortenedLabels,
  datasets: [
    {
      label: "Speechiness",
      data: data_speechiness,
      backgroundColor: randomColor({
        hue: "blue",
      }),

      borderColor: randomColor({
        hue: "blue",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
      fill: true,
    },
    {
      label: "Liveness",
      data: data_liveness,
      backgroundColor: randomColor({
        hue: "yellow",
      }),

      borderColor: randomColor({
        hue: "yellow",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
      fill: true,
    },
  ],
};

export const areaConfig = {
  type: "line",
  data: areaData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vocal Features",
      },
      filler: {
        propagate: false,
      },
    },
    pointBackgroundColor: "#fff",
    radius: 7,
    interaction: {
      intersect: false,
    },
  },
};
