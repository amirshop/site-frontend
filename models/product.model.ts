import mongoose from "mongoose";
import slugify from "slugify";

const schema = mongoose.Schema;

const productSchema = new schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,
    image: String,
    category: String,
  },
  {
    versionKey: false,
  }
);
productSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});
export default mongoose.model("product", productSchema);
