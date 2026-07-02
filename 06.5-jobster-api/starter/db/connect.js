const mongoose = require("mongoose");

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`;

const connectToDatabase = async (url) => {
  try {
    await mongoose.connect(mongoUri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectToDatabase };
