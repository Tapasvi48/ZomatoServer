import { Order } from "../Model/Order.js";
import {User} from "../Model/User.js";
import {Cart} from "../Model/Cart.js"


export const addItems=async(req,res)=>{
try{
const userId=req.user.id;
if(!User.findById(userId)){
return res.status(400).json({success:false,message:"User Not Found"});
}

const {items}=req.body;
if(!userId){
return res.status(400).json({success:false,message:"Please Login First"});
}
if(!items){
return res.status(400).json({success:false,message:"Please Enter Items"});
}
const cart=new Cart({userId,items});
await cart.save();
return res.status(201).json({success:true,message:"Cart Created Successfully"});
}
catch(error){
return  res.status(500).json({message:error.message});}
}
export const removeFromCart=async(req,res)=>{
try{
const productId=req.body.id;
const userCart= await Cart.findOne({userId:req.user.id});
await userCart.items.pull({ _id:productId});
await userCart.save();
return res.status(200).json({success:true,message:"Product Removed Successfully"});
}








catch(error){
return res.status(500).json({message:error.message});
// Internal server error






}
}
export const getCart=async(req,res)=>{
try{
if(!req.user.id){
return res.status(401).json({success:false,message:"Please Login First"});
}
const usercart=await Cart.findOne({userId:req.user.id});
return res.status(200).json({success:true,usercart});
}
catch(error){
return res.status(500).json({success:false,message:error.message});
}
}