import { CustomError } from "~/interfaces/serverError.interface";
import { ProductService } from "~/server/services/product/product.service";
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing ID",
    });
  }
  const products = new ProductService();
  try {
    return await products.findProductById(id);
  } catch (error) {
    const { message, statusCode } = error as CustomError;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Product",
    });
  }
});
