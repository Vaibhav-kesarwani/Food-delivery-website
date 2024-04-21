import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vaibhavkesarwani100:something@cluster0.mfxfxei.mongodb.net/food-delivery-website"
    )
    .then(() => {
      console.log("DB connected");
    });
};
