import mongoose from "mongoose";
import { Order } from "./Order.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
name:{
type:String,
required:true,
},
email:{
type:String,
required:true,
unique:true,
},
password:{
type:String,
required:true,
minlength:[8,"Password must be longer than 8 character long"]
},
avatar:{
public_id:String,
url:String,
},
order:[{
type:String,
// completed or current
id:mongoose.Schema.Types.ObjectId,
ref:"Order"
}],
otp:Number,
otp_expiry:Date,
verified:{
type:Boolean,
default:false,
}
})

userSchema.pre("save",async function(next){
if(!this.isModified("password")){
return next();
}
const salt=await bcrypt.genSalt(10);
this.password=await bcrypt.hash(this.password,salt);
next();

})




userSchema.methods.getJWTToken=function(){
return jwt.sign({_id:this._id},"hehehehehehek",{
expiresIn:5*24*60*1000,
})}
userSchema.methods.comparePassword=async function(password){
return bcrypt.compareSync(password,this.password);       

}





export const User=mongoose.model("User",userSchema);

