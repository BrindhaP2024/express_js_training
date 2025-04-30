const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(
  helmet({
  frameguard: { action: "deny" }, 
    referrerPolicy: { policy: "no-referrer" }, 
  })
);

app.get("/", (req, res) => {
  res.send("Secure Express App with Helmet!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
