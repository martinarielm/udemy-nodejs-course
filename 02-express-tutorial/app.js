import express from "express";
import morgan from "morgan";
import peopleRouter from "./routes/people.js";
import authRouter from "./routes/auth.js";

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

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
