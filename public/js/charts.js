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

// Handling Labels
const allLabelsHandler = (array) => {
  let allLabels = [];

  for (let i = 0; i < 7; i++) {
    const shortName = array[i].name.split("-")[0];
    allLabels.push(shortName);
  }

  return allLabels;
};

export const allLabels = allLabelsHandler(individualChartData);

// In mobile view, the labels mess up the chart as they are sometimes too long.
export let shortenedLabels = [];

for (let i = 0; i < allLabels.length; i++) {
  const arrayLabels = allLabels[i].split(" ");
  shortenedLabels[i] = arrayLabels;
}

// Handling Duplicates. https://stackoverflow.com/a/14438954/13830183
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// Unique songs
const unique = allLabels.filter(onlyUnique);

window.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".compare-heading")) {
    if (unique.length < 3) {
      const message =
        "Please listen to more unique and different songs for a better analysis here!";
      document.getElementById("duplicatesMessage").innerHTML = message;
    }
  }
});
