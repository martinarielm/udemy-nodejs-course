import expresss from "express";
import morgan from "morgan";
import tasksRouter from "./routes/tasks.js";
import connectToDatabase from "./db/connect.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const PORT = 3000;
const app = expresss();

app.use(morgan("dev"));
app.use(expresss.static("./public"));
app.use(expresss.json());

app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();
