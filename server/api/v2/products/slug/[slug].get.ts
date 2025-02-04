import { CustomError } from "~/interfaces/serverError.interface";
import { http } from "~/utils/http";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing slug",
    });
  }

  try {
    return await http.get(`https://localhost:5500/api/v2/products/slug/${slug}`);
  } catch (error) {
    const { message, statusCode } = error as CustomError;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to fetch product",
    });
  }
});
