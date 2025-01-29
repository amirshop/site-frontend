import { http } from "~/utils/http";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return {body: body}
  // try {
  //   const { data } = await http.post("/auth/login", body);
  //   console.log(data)
  //   console.log(data)
  //   console.log(data)
  //   console.log(data)
  //   return data;
  // } catch (error) {
  //   throw createError({
  //     statusCode: 500,
  //     statusMessage: "Failed to login",
  //   });
  // }
});
