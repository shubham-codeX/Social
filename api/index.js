const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")


const app = express();
// dotenv.config();
mongoose.connect(process.env.MONGO_URL, {userNewUrlParser: true},()=>{
  console.log("mongoDb connected");
});

//middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// app.use("/api/users", userRoute);
// app.use("/api/auth", authRoute);


// app.get("/", (req, res)=>{
// res.send("welcome to homepage")
// })
// app.get("/users", (req, res)=>{
//   res.send("welcome to userpage")
//   })

// app.listen(3000, ()=>{
//     console.log("Backend server is running.....")
// })