/* eslint-disable */

import { allLabels } from "../../charts";
import { individualChartData } from "../../charts";
import { shortenedLabels } from "../../charts";

const areaData = {
  labels: shortenedLabels,
  datasets: [
    {
      label: "Speechiness",
      data: [
        individualChartData[0].speechiness,
        individualChartData[1].speechiness,
        individualChartData[2].speechiness,
        individualChartData[3].speechiness,
        individualChartData[4].speechiness,
        individualChartData[5].speechiness,
        individualChartData[6].speechiness,
      ],
      backgroundColor: [
        randomColor({
          hue: "blue",
        }),
      ],
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
      data: [
        individualChartData[0].liveness,
        individualChartData[1].liveness,
        individualChartData[2].liveness,
        individualChartData[3].liveness,
        individualChartData[4].liveness,
        individualChartData[5].liveness,
        individualChartData[6].liveness,
      ],
      backgroundColor: [
        randomColor({
          hue: "yellow",
        }),
      ],
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
