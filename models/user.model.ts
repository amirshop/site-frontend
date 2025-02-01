import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    address: {
      city: String,
      street: String,
      number: Number,
      zipcode: String,
      geolocation: {
        lat: String,
        long: String,
      },
    },
    phone: String,
  },
  { versionKey: false }
);

export default mongoose.model("user", userSchema);
