// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth";
// import userModel from '../../../../models/userModels'
// import dbConnect from '../../../../config/db'
// const jwtt = "XYZ1234567"

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials,req) {
//         dbConnect();
//         const { email, password } = credentials;
//         const user = await userModel.findOne({email})
//         if(!user){
//           throw new Error("User not found");
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if(!isMatch){
//           throw new Error("Invalid email or password");
//         }
//         return user;
//       }
//     })
//   ],
//   secret: jwtt,
// });
