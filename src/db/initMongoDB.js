import mongoose from "mongoose";

import { getEnvVar } from "../utils/getEnvVar.js";

const dbUser = getEnvVar("MONGODB_USER");
const dbPassword = getEnvVar("MONGODB_PASSWORD");
const dbUrl = getEnvVar("MONGODB_URL");
const db = getEnvVar("MONGODB_DB");

export const initMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbUrl}/${db}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Mongo connection successfully established!");
  } catch (error) {
    console.log(`Error connection Mongo ${error.message}`);
    throw error;
  }
};
