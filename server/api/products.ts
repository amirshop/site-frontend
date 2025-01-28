import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const {data} = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
