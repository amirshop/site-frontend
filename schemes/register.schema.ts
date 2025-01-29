import { z } from "zod";
const geolocationSchema = z
  .object({
    lat: z.string().optional(),
    long: z.string().optional(),
  })
  .optional();

const addressSchema = z
  .object({
    city: z.string().optional(),
    street: z.string().optional(),
    number: z.number().optional(),
    zipcode: z.string().optional(),
    geolocation: geolocationSchema,
  })
  .optional();

const nameSchema = z.object({
  first: z.string(),
  last: z.string(),
});
export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  name: nameSchema,
  address: addressSchema,
  phone: z.string().optional(),
});

export type RegisterSchemaType = z.output<typeof registerSchema>;
