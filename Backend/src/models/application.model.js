import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    },
    //change status to accepted or rejected
    statusUpdatedAt: { 
        type: Date, 
        default: Date.now 
      },
},{timestamps:true});
export const Application  = mongoose.model("Application", applicationSchema);