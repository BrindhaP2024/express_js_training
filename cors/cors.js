import express, { json } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://google.com"],
  methods:["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: "Content-type,Authorization",
  credentials: true,

};


app.use(cors(corsOptions));
app.use(json());

app.get("/public",(req,res) => {
  res.json({message :"This route is accessible"});
});

app.get("/restricted",cors(corsOptions),(req,res) =>{
  res.json({message:"cors-origin access done explicitly"});
})

app.post("/submit", (req, res) => {
  const data = req.body;
  res.json({ message: "Data received successfully!", receivedData: data });
});

app.options("/submit", cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


