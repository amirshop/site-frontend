import { CustomError } from "~/interfaces/serverError.interface";
import { ProductService } from "~/server/services/product/product.service";
export default defineEventHandler(async (event) => {
  const products = new ProductService();
  try {
    return await products.findProductList();
  } catch (error) {
    const { message, statusCode } = error as CustomError;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Product",
    });
  }
});
