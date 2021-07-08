/* eslint-disable */

export let overallChartData;
export let individualChartData;

// Keeping Home page simple and to prevent errors as ChartJS is not defined in home.pug
if (!document.querySelector(".home-container")) {
  Chart.defaults.font.family = "'Yomogi', cursive";
  Chart.defaults.font.weight = "bold";
  Chart.defaults.font.size = 17;
  Chart.defaults.plugins.tooltip.titleAlign = "center";
  Chart.defaults.plugins.tooltip.titleSpacing = 5;
  Chart.defaults.plugins.tooltip.bodySpacing = 5;
  Chart.defaults.plugins.tooltip.padding = 10;
}

// DATA
if (document.querySelector("#forData")) {
  overallChartData = JSON.parse(
    document.querySelector("#forData").getAttribute("data-overall")
  );
  // I need it for the mode in overallFeatures.
  individualChartData = JSON.parse(
    document.querySelector("#forData").getAttribute("data-individual")
  );
}

// Mode( Major or Minor Scale )

const modeFreq = (arr) => {
  let major = 0;
  arr.forEach((el) => {
    if (el.mode === 1) major++;
  });
  return major;
};

export const major = modeFreq(individualChartData);

const allLabelsHandler = (array) => {
  let allLabels = [];

  for (let i = 0; i < 7; i++) {
    const shortName = array[i].name.split("-")[0];
    allLabels.push(shortName);
  }

  return allLabels;
};

export const allLabels = allLabelsHandler(individualChartData);
