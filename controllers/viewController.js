exports.visualize = (req, res, next) => {
  const { overallFeatures } = req.session;
  const { user } = req.session;
  const { individualFeatures } = req.session;

  res.render("overallViews", {
    title: "Overview",
    user,
    overallFeatures,
    individualFeatures,
  });
};

exports.compare = (req, res, next) => {
  const { overallFeatures } = req.session;
  const { individualFeatures } = req.session;

  res.render("comparisonViews", {
    title: "Comparison of your Recent Tracks",
    individualFeatures,
    overallFeatures,
  });
};

exports.dataErr = (req, res, next) => {
  const dataMessage =
    "Data is not found!! Please listen to some music or turn off private mode in Settings!";

  res.render("error", {
    message: dataMessage,
  });
};
