import mongoose from "mongoose";
import slugify from "slugify";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    slug: { type: String, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

ProductSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
