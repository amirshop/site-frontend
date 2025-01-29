import mongoose from "mongoose";

const schema = mongoose.Schema;

const productSchema = new schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  image: String,
  category: String,
});

export default mongoose.model("product", productSchema);
