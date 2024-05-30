import express from "express";
import HelloController from "./controllers/helloController.js";

const app = express();
const port = 8000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/data", HelloController.index);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
