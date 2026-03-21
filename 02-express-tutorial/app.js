import express from "express";

// import path, { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().toLocaleTimeString();

  console.log("👨‍🎤 -> url:", url);
  console.log("👨‍🎤 -> method:", method);
  console.log("👨‍🎤 -> time:", time);

  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
