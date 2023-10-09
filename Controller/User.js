import { Order } from "../Model/Order.js";
import {User} from "../Model/User.js"
import { sendMail } from "../utils/sendMail.js";
import { sendToken } from "../utils/SendToken.js";
export const register=async(req,res)=>{
try{
const {name,email,password}=req.body;
// const {avatar}=req.files;
let user=await User.findOne({email});
if(user){
return res.status(400).json({
success:false,
message:"User alerady exist",
})}
const otp=Math.floor(100000+Math.random()*900000);
user=await User.create({name,email,password,
avatar:{
public_id:"",
url:"",
}
,otp,otp_expiry:new Date(Date.now()+5*60*1000)});
await sendMail(email,"Verify account",`Your Otp is ${otp}`);
await sendToken(res,user,200,"OTP send to your account please verify your account");

}
catch(error){
return res.status(500).json({
success:false,
message:error.message,
})



}

}
export const verify=async(req,res)=>{
try{
 const otp=Number(req.body.otp);
 console.log(otp);
 const user=await User.findById(req.user._id);
 console.log(user);

 if(user.otp!==otp){
return res.status(400).json({
success:false,
message:"Invalid Otp",
})
}
user.verified=true;
user.otp=null;
user.otp_expiry=null;
await user.save();
return res.status(200).json({
success:true,
message:"Account verified successfully",

})








}
catch(error){
return res.status(500).json({
success:false,
message:error.message,


})
}}
export const login=async(req,res)=>{ 
try{const {email,password}=req.body;
const user=await User.findOne({email});
if(!user){
return res.status(400).json({
success:false,  
message:"User not found"});}
const isMatch=await user.comparePassword(password); 
if(!isMatch){
return res.status(400).json({
success:false,
message:"Invalid email or password",
})
}
sendToken(res,user,200,"Login Successfull");
}
catch(error){
return res.status(500).json({ 
success:false,
message:error.message,
}) 







}
}
export const logout=async(req,res)=>{ 
try{
    const user=User.findById(req.user._id);
res.status(200).cookie("token",null,{expires:new Date(Date.now())}).json({
success:true,
message:"Logout Successfull",
})



}
catch(error){

return res.status(500).json({
success:false,
message:error.message,
})
}





}
export const getAllOrders=async(req,res)=>{
try{
    const user=await User.findById(req.user._id);
if(!user){
return res.status(400).json({
success:false,
message:"User not found",
})
}
const userId=user._id;
const pastOrders=await Order.find({userId});
return res.status(200).json({
pastOrders
})







}

catch(error){

return res.status(500).json({
success:false,
message:error.message,
})
}
}





