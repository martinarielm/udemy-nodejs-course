import mongoose from "mongoose";
import "dotenv/config";
import dns from "node:dns";

const defaultDnsServer = process.env.DNS_SERVER || "1.1.1.1";
const currentDnsServers = dns.getServers();

if (currentDnsServers.includes("127.0.0.1")) {
  dns.setServers([defaultDnsServer]);
  console.log(
    "Node DNS resolver was using 127.0.0.1, switched to",
    defaultDnsServer,
  );
}

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

export default connectToDatabase;
