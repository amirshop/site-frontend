import { CustomError } from "~/interfaces/serverError.interface";
import { http } from "~/utils/http";
export default defineEventHandler(async (event) => {
  try {
    return await http.get("https://localhost:5500/api/v2/products");
  } catch (error) {
    const { message, statusCode } = error as CustomError;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Product",
    });
  }
});
