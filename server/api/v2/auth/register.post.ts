import { connectDB } from "~/utils/db";
import User from "~/models/user.model";
import bcrypt from "bcrypt";
import { z } from "zod";
import _ from "lodash";

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);

  // اعتبارسنجی ورودی‌ها
  const schema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    email: z.string().email("Invalid email address"),
    name: z.object({
      first: z.string().min(2, "First name is required"),
      last: z.string().min(2, "Last name is required"),
    }),
  });

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    throw createError({
      statusCode: 400,
      statusMessage: parsed.error.errors.map((e) => e.message).join(", "),
    });
  }

  try {
    const existingUser = await User.findOne({ username: body.username });

    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = new User({
      ...body,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const userObject = savedUser.toObject();
    const filteredUser = _.omit(userObject, ["password", "__v"]);

    return {
      message: "Registration successful",
      data: filteredUser,
    };
  } catch (error) {
    const { message, statusCode } = error as Error;
    throw createError({
      statusCode: statusCode || 500,
      statusMessage: message || "Failed to Register",
    });
  }
});
