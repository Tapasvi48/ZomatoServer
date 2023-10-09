import { Order } from "../Model/Order.js";
import {User} from "../Model/User.js";
export const createOrder = async (req, res) => {
    try {
       
        const userId =req.user.id;
        const { items,deliveryAddress,total,image} = req.body;
        const order = new Order({
          userId,
          items, 
          deliveryAddress,
          image,
          total
        });
    
       
        await order.save();
    
       
        return res.status(201).json({success:true, message:"Order created successfully",order });
      } 
      
      catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: "Error creating order" });
      }







}

export const getOrderDetails = async (req, res) => { 
try{
const order = await Order.findById(req.params.id);
if(!order){
return res.status(404).json({success:false,message:"Order not found"});
}
return res.status(200).json(
{
success:true,
order,
message:"Order found",
})}

catch(error){

return res.status(500).json({success:false,message:"Order not found"});

} 

}