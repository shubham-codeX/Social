const router = require('express').Router();
const User = require("../models/user");

//REGISTER
router.post("/register", async (req, res) => {
 const newUser = new User({
    username: "john",
    email : "john",
    password: "123456",
 });
//  try{
//     const user = await newUser.save();
//     res.status(200).json(user);
//  }catch(err){
//     console.log(err);
//  }
 await user.save();
 res.send("ok")
});

module.exports = router