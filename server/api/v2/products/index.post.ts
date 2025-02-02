import { connectDB } from "~/utils/db";
import Product from "~/models/product.model";
import slugify from "slugify";

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);
  try {
    const duplicated = await Product.findOne({
      slug: slugify(body.title, { lower: true, strict: true }),
    });
    if (duplicated) return { message: "nooooo" };
    const createdProduct = await Product.create(body);
    return await createdProduct.save();
  } catch (error) {
    const { message, statusCode } = error as Error;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Product",
    });
  }
});
