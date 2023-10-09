import mongoose from "mongoose"
export const connectDatabase=async()=>{
mongoose.connect(process.env.MONGO_URL);
console.log("database connected");
}