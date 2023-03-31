import mongoose from "mongoose";

export interface User {
  name: string;
  email: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const UserModel = mongoose.model<User & mongoose.Document>(
  "User",
  userSchema
);
