import mongoose from "mongoose";

const schema = mongoose.Schema;
import Product from "./product.model";
import User from "./user.model";

const cartSchema = new schema({
  // _id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //   },
  userId: {
    type: schema.Types.Number,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  products: [
    {
      productId: {
        type: schema.Types.Number,
        ref: Product,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

export default mongoose.model("cart", cartSchema);
