const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.setHeader("X-Custom-Header", "MyCustomHeaderValue");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ message: "Http Headers" }));
});

app.listen(3000, () => console.log("Server running on port 3000"));
