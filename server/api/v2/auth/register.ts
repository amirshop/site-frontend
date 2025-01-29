import { connectDB } from "~/utils/db";
import User from "~/models/user.model";
import bcrypt from "bcrypt";
import { z } from "zod";
export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);

  try {
    const existingUser = await User.findOne({ username: body.username });

    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      body.password,
      bcrypt.genSaltSync(10) // استفاده از Salt با قدرت بالاتر
    );
    // ایجاد کاربر جدید
    const newUser = new User({
      username: body.username,
      password: hashedPassword,
    });

    // ذخیره کاربر جدید
    const savedUser = await newUser.save();
    return savedUser;

    // return { message: "Registration successful", savedUser };
  } catch (error) {
    // اگر خطا اتفاق افتاد، ارسال خطای مناسب
    return { error };
    // throw createError({
    //   statusCode: 500,
    //   statusMessage: "Failed to register",
    // });
  }
});
