require("dotenv").config();

const MOCK_DATA = require("./MOCK_DATA.json");
const Job = require("./models/Job");

const { connectToDatabase } = require("./db/connect");

const start = async () => {
  try {
    await connectToDatabase(process.env.MONGO_URI);
    await Job.create(MOCK_DATA);
    console.log("Success! Data has been added to the database.");
    process.exit(0); // Exit the process after successful completion
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process with an error code
  }
};

start();
