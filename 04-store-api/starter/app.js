import "dotenv/config";
import expresss from "express";
import morgan from "morgan";
import notFoundHandler from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import connectToDatabase from "./db/connect.js";
import productsRouter from "./routes/products.js";

const app = expresss();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(expresss.json());

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();
