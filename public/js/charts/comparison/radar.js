/* eslint-disable */

import { individualChartData, allLabels, dataLoop } from "../../charts";
import { shortenedLabels } from "../../charts";

const labelLength = allLabels.length;

const data_acousticness_total = dataLoop(individualChartData, "acousticness");
const data_instrumentalness_total = dataLoop(
  individualChartData,
  "instrumentalness"
);

const data_acousticness = [];
const data_instrumentalness = [];

for (let i = 0; i < labelLength; i++) {
  data_acousticness.push(data_acousticness_total[i]);
  data_instrumentalness.push(data_instrumentalness_total[i]);
}

const studioData = {
  labels: allLabels,
  datasets: [
    {
      label: "Acousticness",
      data: data_acousticness,
      backgroundColor: randomColor({
        hue: "pink",
      }),

      borderColor: randomColor({
        hue: "pink",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
      fill: true,
    },
    {
      label: "Instrumentalness",
      data: data_instrumentalness,
      backgroundColor: randomColor({
        hue: "#c2ff85",
      }),

      borderColor: randomColor({
        hue: "#c2ff85",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
      fill: true,
    },
  ],
};

export const studioConfig = {
  type: "radar",
  data: studioData,
  options: {
    scales: {
      r: {
        pointLabels: {
          font: {
            size: window.innerWidth < 600 ? 12 : 17,
            weight: "bold",
          },
          textAlign: "center",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Studio Features",
      },
    },
    pointBackgroundColor: "white",
    radius: 4,
    interaction: {
      intersect: false,
    },
  },
};
