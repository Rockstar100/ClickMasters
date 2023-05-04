import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please provide your name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minlength: 6,
        select: false,
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        unique: true,
    },

});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    // const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, 10);
    // next();
});

export default mongoose.models.User || mongoose.model("User", userSchema);