import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name:{type:String, required:true},
    email:{type:String, unique:true},
    student_id:{type:String, required:true},
    gpa:{type:Number, required:true}
  },
  {
    timestamps:true
  }
  )
  
  const studentRecord = mongoose.model("studentRecord", studentSchema);
  
  export default studentRecord;