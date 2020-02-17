const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendgrid/mail");
const app = express();

const port = 8000;

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );

  const msg = {
    to: "hkcheung1217@gmail.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message
  };

  sendGrid
    .send(msg)
    .then(() => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error :", err);
      res.status(401).json({
        success: false
      });
    });
});

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
