import "dotenv/config";
import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mainRouter from "./routes/main.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", mainRouter);

// middleware

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
