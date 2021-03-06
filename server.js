const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const cors = require("cors"); // allows/disallows cross-site communication
const corsOptions = require("./corsOptions");
const morgan = require("morgan"); // logs requests, use "tiny" or "combined"

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));

// API calls
app.get("/api/hello", async (req, res) => {
  res.send({ express: "Hello From Express, proxied server!" });
});

// NODE_ENV is a heroku config
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/dist/test-app")));
  // Handle angular routing, return all requests to angular app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/dist/test-app", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
