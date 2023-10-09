import mongoose from "mongoose";
import {User} from "./User.js"
const orderSchema=new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
      },
    

      items: [
        {
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    

      total: {
        type: Number,
        required: true,
      },
      deliveryAddress: {
        type: String,
        required: true,
      },
    

      status: {
        type: String,
        enum: ["pending", "processing", "delivered", "cancelled"],
        default: "pending",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      }
})
export const Order=mongoose.model("Order",orderSchema);
