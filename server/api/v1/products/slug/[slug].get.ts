import { CustomError } from "~/interfaces/serverError.interface";
import { ProductService } from "~/server/services/product/product.service";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing slug",
    });
  }

  const productService = new ProductService();

  try {
    const product = await productService.findProductBySlug(slug);
    console.log("ProductService product", product);
    return product;
  } catch (error) {
    const { message, statusCode } = error as CustomError;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to fetch product",
    });
  }
});
