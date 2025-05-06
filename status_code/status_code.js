const express = require("express");
const app = express();

app.use(express.json());


app.get("/user", (req, res) => {
    res.status(200).json({ message: "User data retrieved successfully" });
});

app.post("/user", (req, res) => {
    res.status(201).json({ message: "User created successfully" });
});

app.post("/user/validate", (req, res) => {
    if (!req.body.username) {
        return res.status(400).json({ error: "Username is required" });
    }
    res.status(200).json({ message: "Valid input" });
});

app.get("/user/protected", (req, res) => {
    res.status(401).json({ error: "Unauthorized access" });
});
app.get("/user/public",(res,req) =>{
    res.status(401).json({message:"validate here!"});
})

app.get("/user/admin", (req, res) => {
    res.status(403).json({ error: "Forbidden: Admin access required" });
});

app.get("/user/:id", (req, res) => {
    res.status(404).json({ error: "User not found" });
});

app.get("/user/error", (req, res) => {
    res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
