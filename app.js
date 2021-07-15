const dotenv = require("dotenv");
const cors = require("cors");
const compression = require("compression");
const expressSession = require("express-session");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const spotifyRouter = require("./routes/spotifyRoutes");

dotenv.config({ path: "./config.env" });

const app = express();

// view Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(cors());

app.use(morgan("dev"));
app.use(
  express.json({
    limit: "50kb",
  })
);

app.use(
  expressSession({
    secret: [process.env.SECRET_SESSION, "secret-session"],
    resave: false,
    saveUninitialized: false,
  })
);

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Compressing text responses
app.use(compression());

app.use("/", spotifyRouter);

// Error handling
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/////// GLOBAL ERROR HANDLING ////////////////
// error handler
app.use((err, req, res, next) => {
  if (!err.message) {
    err.message =
      process.env.NODE_ENV === "development"
        ? err.message
        : "Please refresh or login again!";
  }

  // Production
  const errProd = new Error("Something went wrong");
  res.locals.error = process.env.NODE_ENV === "development" ? err : errProd;
  const { message } = err;
  console.log(err);

  // render the error page
  res.status(err.status || 500);

  if (
    err.message ===
    "Data is not found!! Please listen to some music or turn off private mode in Settings!"
  ) {
    return res.redirect("/dataErr");
  }
  res.render("error", {
    message,
  });
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message, err.stack);
  console.log("Shutting down gracefully");

  // Shut down the server, then slowly shut down the application, so that there are no outgoing or expecting responses.
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message, err.stack);

  console.log("UNCAUGHT EXCEPTION 🤯");
  console.log("Shutting down gracefully");

  // Happens synchronously, no need of any server.
  process.exit(1);
});

module.exports = app;
