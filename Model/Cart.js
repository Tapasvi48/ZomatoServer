import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }, 
      items:[
        {_id:{
type:String,
required:true

        },
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
      ]


        
});

export const Cart=mongoose.model("Cart",CartSchema);