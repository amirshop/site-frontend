import axios, { Axios, AxiosError } from "axios";

export default defineEventHandler(async (event) => {
  // Extract the product ID from the request URL
  const params = event.context.params;
    // const id = params?.id

    const id = getRouterParam(event, "id");

    
  // Validate the ID (optional, based on your requirements)
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Product ID is required",
    });
  }

  try {
    // Fetch product data from an external API
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

    // Return the product data
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    // console.error("Error fetching product:", error);

    // Handle errors and return an appropriate response
    throw createError({
      statusCode: err.response?.status || 500,
      statusMessage: err.response?.statusText || "Failed to fetch product",
    });
  }
});
