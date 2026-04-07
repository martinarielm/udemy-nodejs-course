import express from "express";
import logger from "./logger.js";
import authorize from "./authorize.js";

// import path, { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/items", (req, res) => {
  console.log("👨‍🎤 -> req.user:", req.user);
  res.send("Items");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
