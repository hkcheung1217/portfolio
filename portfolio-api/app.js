const express = require("express");
const sendGrid = require("@sendgrid/mail");
const app = express();

const port = process.env.PORT || 4000;

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Should register a new key and replace my key below
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
