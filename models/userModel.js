import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

     name : {
        type : String,
        required : true,

     },
     contact : {
        type : Number,
        required : true,
      },
      email : {
        type : String,
        required : false
      },
      message : {
        type : String,
        required : false 
      }

})

const userModel =  mongoose.model("User" , userSchema)
export default userModel
