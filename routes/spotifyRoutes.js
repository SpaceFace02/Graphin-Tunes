const express = require("express");
const spotifyController = require("../controllers/spotifyController");
const viewController = require("../controllers/viewController");

const router = express.Router();
const app = require("../app");

router.get("/", (req, res, next) => {
  res.render("home", {
    title: "Welcome!",
  });
});

router.get("/spotifyCallback", spotifyController.spotifyCallback);

router.get("/login", spotifyController.spotifyLogin);

router.get("/visualize", viewController.visualize);

router.get("/compare", viewController.compare);

module.exports = router;
