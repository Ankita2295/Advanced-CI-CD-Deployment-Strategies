const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const version = process.env.APP_VERSION || "development";

app.get("/", (req, res) => {
  res.status(200).json({
    application: "web-application",
    message: "Application is running",
    version
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    version
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Application version ${version} listening on port ${port}`);
});

module.exports = app;
