import express from "express"
import { createOrder, getOrderDetails } from "../Controller/Order.js";
import { isAuthenticated } from "../middleware/auth.js";
const router=express.Router()
router.route("/order").post(isAuthenticated,createOrder);
router.route("/order/:id").get(isAuthenticated,getOrderDetails);
export default router;