import express from "express"
import { isAuthenticated } from "../middleware/auth.js";
import  {addItems} from "../Controller/Cart.js";
import { removeFromCart } from "../Controller/Cart.js";
import { getCart } from "../Controller/Cart.js";


const router=express.Router();
router.route("/addItems").post(isAuthenticated,addItems);
router.route("/remove").post(isAuthenticated,removeFromCart);
router.route("/getCart").get(isAuthenticated,getCart);
// router.route("/clearCart").post(isAuthenticated,clearCart);
// router.route("/updateQuantity").post(isAuthenticated,updateQuantity);
// router.route("/checkout").post(isAuthenticated,checkout);
export default router;


