import app from "./app.js"
import {connectDB} from "./config/database.js";
import Razorpay from "razorpay";

connectDB();

export const instance= new Razorpay({
  key_id: process.env.YOUR_KEY_ID,
  key_secret: process.env.YOUR_SECRET
})


app.get("/",(req,res,next)=>{
    res.send("<h1>WOrking</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server is working on PORT: ${process.env.PORT},in ${process.env.NODE_ENV} MODE`
  )
);