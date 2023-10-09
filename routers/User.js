import express from "express"
import { getAllOrders, login, logout, register } from "../Controller/User.js"
import { isAuthenticated } from "../middleware/auth.js";
import { verify } from "../Controller/User.js";
const router=express.Router();
router.route("/register").post(register);
router.route("/verify").post(isAuthenticated,verify);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated,logout);
router.route("/me/order").get(isAuthenticated,getAllOrders);


export default router;
