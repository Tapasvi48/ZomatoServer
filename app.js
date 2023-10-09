import express from "express"
import User from "./routers/User.js"
import Order from "./routers/Order.js"
import Cart from "./routers/Cart.js"
import cookieParser from "cookie-parser";
import cors from "cors";
export const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use("/api/v1",User);
app.use("/api/v1",Order);
app.use("/api/v1",Cart);