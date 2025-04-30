import express from "express";
const app = express();

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); 
};

app.use(requestLogger); 
app.get("/", (_req, res) => {
    res.send("Welcome to Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
