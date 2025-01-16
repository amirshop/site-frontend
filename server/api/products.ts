import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    console.log(response);
    console.log(response);

    return response.data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch products",
    });
  }
});
