import { connectDB } from "~/utils/db";
import Product from "~/models/product.model";
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  await connectDB();
  try {
    return await Product.findById(id);
  } catch (error) {
    const { message, statusCode } = error as Error;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Product",
    });
  }
});
