/* eslint-disable */

import { allLabels } from "../../charts";
import { individualChartData } from "../../charts";

const lineData = {
  labels: allLabels,
  // borderColor: "rgb(230,230,230)",
  datasets: [
    {
      label: "Danceability",
      data: [
        individualChartData[0].danceability,
        individualChartData[1].danceability,
        individualChartData[2].danceability,
        individualChartData[3].danceability,
        individualChartData[4].danceability,
        individualChartData[5].danceability,
        individualChartData[6].danceability,
      ],
      backgroundColor: [
        randomColor({
          hue: "orange",
        }),
      ],
      borderColor: randomColor({
        hue: "orange",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
    {
      label: "Valence",
      data: [
        individualChartData[0].valence,
        individualChartData[1].valence,
        individualChartData[2].valence,
        individualChartData[3].valence,
        individualChartData[4].valence,
        individualChartData[5].valence,
        individualChartData[6].valence,
      ],
      backgroundColor: [
        randomColor({
          hue: "purple",
        }),
      ],
      borderColor: randomColor({
        hue: "purple",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
    {
      label: "Energy",
      data: [
        individualChartData[0].energy,
        individualChartData[1].energy,
        individualChartData[2].energy,
        individualChartData[3].energy,
        individualChartData[4].energy,
        individualChartData[5].energy,
        individualChartData[6].energy,
      ],
      backgroundColor: [
        randomColor({
          hue: "green",
        }),
      ],
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
  },
};
