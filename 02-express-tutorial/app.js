import express from "express";
import morgan from "morgan";
import { people } from "./data.js";

// import path, { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

app.use(morgan("dev"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res
    .status(201)
    .json({ success: true, msg: "Person added successfully", person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please provide credentials");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
