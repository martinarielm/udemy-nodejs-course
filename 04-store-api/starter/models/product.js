import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    maxlength: [100, "Product name cannot be more than 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "Please select a valid company, {VALUE} it's not",
    },
  },
});

export default mongoose.model("Product", productSchema);
