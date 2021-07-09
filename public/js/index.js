/* eslint-disable */

import { polarConfig } from "./charts/overall/polar";
import { modeChartConfig } from "./charts/overall/mode";
import { tempoConfig } from "./charts/overall/tempo";
import { overallStudioConfig } from "./charts/overall/overallStudio";
import { lineConfig } from "./charts/comparison/line";
import { areaConfig } from "./charts/comparison/area";
import { studioConfig } from "./charts/comparison/radar";
import "@babel/polyfill";

const logoutLink = document.querySelector(".logout");

if (logoutLink) {
  logoutLink.addEventListener("click", () => {
    const url = "https://accounts.spotify.com/en/logout";
    const spotifyLogoutWindow = window.open(
      url,
      "Spotify Logout",
      "width=700,height=500,top=40,left=40"
    );
    setTimeout(() => spotifyLogoutWindow.close(), 2000);

    window.location.href = "/";
  });
}

if (document.getElementById("overallPolar")) {
  const polarChart = new Chart(
    document.getElementById("overallPolar"),
    polarConfig
  );
}

if (document.getElementById("modeChart")) {
  const modeChart = new Chart(
    document.getElementById("modeChart"),
    modeChartConfig
  );
}

if (document.getElementById("tempoChart")) {
  const tempoChart = new Chart(
    document.getElementById("tempoChart"),
    tempoConfig
  );
}

if (document.getElementById("studioChart")) {
  const overallStudioChart = new Chart(
    document.getElementById("studioChart"),
    overallStudioConfig
  );
}

if (document.getElementById("compareNonStudioFeatures")) {
  const nonstudioChart = new Chart(
    document.getElementById("compareNonStudioFeatures"),
    lineConfig
  );
}

if (document.getElementById("vocalFeatures")) {
  const vocalFeaturesChart = new Chart(
    document.getElementById("vocalFeatures"),
    areaConfig
  );
}

if (document.getElementById("studioFeatures")) {
  const studioFeaturesChart = new Chart(
    document.getElementById("studioFeatures"),
    studioConfig
  );
}
