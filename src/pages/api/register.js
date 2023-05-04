import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";


export default async (req, res) => {
   if(req.method !== "POST") {
       dbConnect();
       const { fname, email, password,phone } = req.body;
   }
   
    const user = await User.create({fname , email, password,phone});
    res.status(201).json({success: true, message: "User created successfully"});

   
};
