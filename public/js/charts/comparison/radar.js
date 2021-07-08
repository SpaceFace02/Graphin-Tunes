/* eslint-disable */

import { allLabels } from "../../charts";
import { individualChartData } from "../../charts";

const studioData = {
  labels: allLabels,
  datasets: [
    {
      label: "Acousticness",
      data: [
        individualChartData[0].acousticness,
        individualChartData[1].acousticness,
        individualChartData[2].acousticness,
        individualChartData[3].acousticness,
        individualChartData[4].acousticness,
        individualChartData[5].acousticness,
        individualChartData[6].acousticness,
      ],
      backgroundColor: [
        randomColor({
          hue: "pink",
        }),
      ],
      borderColor: randomColor({
        hue: "pink",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
    },
    {
      label: "Instrumentalness",
      data: [
        individualChartData[0].instrumentalness,
        individualChartData[1].instrumentalness,
        individualChartData[2].instrumentalness,
        individualChartData[3].instrumentalness,
        individualChartData[4].instrumentalness,
        individualChartData[5].instrumentalness,
        individualChartData[6].instrumentalness,
      ],
      backgroundColor: [
        randomColor({
          hue: "#c2ff85",
        }),
      ],
      borderColor: randomColor({
        hue: "#c2ff85",
        luminosity: "light",
        format: "rgba",
        alpha: 0.6,
      }),
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
            size: window.innerWidth < 600 ? 12 : 16,
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
