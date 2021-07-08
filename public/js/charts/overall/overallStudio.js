/* eslint-disable */

// ACOUSTICNESS, LIVELINESS, INSTRUMENTALNESS, SPEECHINESS

import { overallChartData } from "../../charts";

const studioData = {
  labels: ["Liveness", "Acousticness", "Speechiness", "Instrumentalness"],
  datasets: [
    {
      label: "Studio Features",
      borderColor: randomColor({
        luminosity: "bright",
      }),
      data: [
        overallChartData.liveness,
        overallChartData.acousticness,
        overallChartData.speechiness,
        overallChartData.instrumentalness,
      ],
      hoverOffset: 4,
    },
  ],
};

export const overallStudioConfig = {
  type: "line",
  data: studioData,
  options: {
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
    pointBackgroundColor: "#fff",
    radius: 7,
    interaction: {
      intersect: false,
    },
  },
};
