import { connectDB } from "~/utils/db";
import User from "~/models/user.model";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);

  try {
    const user = await User.findOne({ username: body.username });

    if (!user) {
      return createError({
        statusCode: 401,
        statusMessage: "User not found",
      });
      // throw createError({
      //   statusCode: 401,
      //   statusMessage: "User not found",
      // });
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid password",
      });
    }

    // به جای ارسال کامل کاربر، می‌توانید فقط فیلدهای ضروری را ارسال کنید
    return {
      message: "Login successful",
      user: { _id: user._id, username: user.username },
    };
  } catch (error) {
    // اضافه کردن جزئیات بیشتر برای خطای 500
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message || "Failed to login",
    });
  }
});
