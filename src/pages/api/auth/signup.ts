// import bcrypt from "bcryptjs";
// import { NextApiRequest,NextApiResponse } from "next";
// import { connectToMongoDB } from "../../../../lib/mongodb";
// import User from "../../../../models/user";


// const handler = async (req:NextApiRequest, res:NextApiResponse  ) => {
//     connectToMongoDB().catch(err => res.json(err))

//     if( req.method == "POST") {
        
//         if (!req.body) {
//             res.status(400).json({error: "Data is Missing"})

//             const {fullName, email, password} = req.body;

//             const userExists = await User.findOne({email}),
//             if (userExists) {
//                 res.status(409).json({error: "User already exists"})
//             }
//             else {
//                 if (password.length < 6) {
//                     res.status(409).json({error: "Password must be at least 6 characters long"})
//                 }

//                 const hashedPassword = await bcrypt.hash(password, 12),

//                 User.create({
//                     fullName,
//                     email,
//                     password: hashedPassword
                    
//                 },
//                 (error, unknown, data) => {
                   
//             })

//         }
//     }
//     else {
//         res.status(405).json({error: "Invalid request"})
//     }


// }

// export default handler; 