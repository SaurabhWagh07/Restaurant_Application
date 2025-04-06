import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3, "First name must contain at least 3 charaters!"],
        maxLength: [30, "First name cannot exceed 30 charaters!"],
    },

    lastName:{
        type:String,
        required:true,
        minLength: [3, "First name must contain at least 3 charaters!"],
        maxLength: [30, "First name cannot exceed 30 charaters!"],
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Please enter a valid email address!"],
    },
    phone:{
        type:String,
        required:true,
        minLength: [11, "phone number must contain only 11 digits!"],
        maxLength: [11, "phone number must contain only 11 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);