import "dotenv/config";
import connectToDatabase from "./db/connect.js";
import Product from "./models/product.js";
import jsonProducts from "./products.json" with { type: "json" };

const startServer = async () => {
  try {
    await connectToDatabase();
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Products added to the database");
    process.exit(0);
  } catch (error) {
    console.error("Error populating the database:", error);
    process.exit(1);
  }
};

startServer();
