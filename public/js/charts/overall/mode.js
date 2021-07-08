/* eslint-disable */
import { major } from "../../charts";
import { individualChartData } from "../../charts";

const dataMode = {
  labels: ["Major", "Minor"],
  datasets: [
    {
      label: "Mode Chart",
      backgroundColor: [
        randomColor({
          hue: "red",
          format: "rgba",
          alpha: 0.7,
          luminosity: "light",
        }),
        randomColor({
          hue: "blue",
          format: "rgba",
          alpha: 0.7,
          luminosity: "light",
        }),
      ],
      borderColor: "rgb(230,230,230)",
      data: [major, individualChartData.length - major],
      hoverOffset: 4,
    },
  ],
};

export const modeChartConfig = {
  type: "doughnut",
  data: dataMode,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -28.7 * Math.PI,
    circumference: 57 * Math.PI,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Your Modes",
      },
    },
  },
};
