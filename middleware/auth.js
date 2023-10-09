import jwt from 'jsonwebtoken';
import {User} from "../Model/User.js"
export const isAuthenticated=async(req,res,next)=>{
try{
const {token}=req.cookies;  
if(!token)
{
return res.status(401).json({success:false,message:"Please login first"});
}
const decoded=jwt.verify(token,"hehehehehehek"); 
req.user=await User.findById(decoded._id);
console.log("heeee");
next();
}

catch(error)
{
return res.status(500).json({success:false,message:error.message})
}   
}
