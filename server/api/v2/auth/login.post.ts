import { connectDB } from "~/utils/db";
import User from "~/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);

  try {
    const user = await User.findOne({ username: body.username });

    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid user or password",
      });
    }

    const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid user or password",
      });
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "7h" }
    );
    return {
      message: "Login successful",
      user: { _id: user._id, username: user.username },
      token,
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message || "Failed to login",
    });
  }
});
