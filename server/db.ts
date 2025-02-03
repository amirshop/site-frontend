import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/amirshop";

export const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error(
      "❌ MONGO_URI is not defined. Please check your environment variables."
    );
  }

  console.log("🚀 ~ connectDB ~ MONGO_URI:", MONGO_URI);
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ قبلاً به دیتابیس متصل شده‌ایم.");
      return;
    }
    await mongoose.connect(MONGO_URI);
    console.log("✅ اتصال موفق به MongoDB!");
  } catch (error) {
    console.error("❌ خطا در اتصال به دیتابیس:", error);
    throw error;
  }
};
