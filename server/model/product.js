import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    default: 0, // Default discount percentage to 0 if not provided
  },
  rating: {
    type: Number,
    default: 0, // Default rating to 0 if not provided
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of strings representing image URLs
    default: [], // Default empty array for images if not provided
  },
});

export default mongoose.model("Products", productSchema);
