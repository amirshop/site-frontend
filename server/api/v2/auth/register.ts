import { connectDB } from "~/utils/db";
import User from "~/models/user.model";
import bcrypt from "bcrypt";
import { z } from "zod";
import _ from "lodash";
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
      bcrypt.genSaltSync(10)
    );

    const newUser = new User({
      ...body,
      password: hashedPassword,
    });
    console.log(newUser);
    console.log(newUser);
    console.log(newUser);
    console.log(newUser);

    const savedUser = await newUser.save();
const xxx = _.omit(savedUser, ["password", "__v"])
    return {
      message: "Registration successful",
      data: xxx,
    };
  } catch (error) {
    return { error };
    // throw createError({
    //   statusCode: 500,
    //   statusMessage: "Failed to register",
    // });
  }
});
