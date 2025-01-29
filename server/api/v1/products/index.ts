import { http } from "~/utils/http";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await http.get("/products");
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
