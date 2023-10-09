
export const sendToken=async (res,user,statusCode,message)=>{
const token=user.getJWTToken();
const options={
httpOnly:true,
expires:new Date(Date.now()+5*24*60*60*1000),
}

return res.status(statusCode).cookie("token",token,options).json({
success:true,
message:message,
user:user
})



}