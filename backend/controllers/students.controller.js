import studentRecord from "../models/student.model.js";


export const addStudent = async (req,res) => {
  try{
    const student = await studentRecord.create(req.body)
    res.status(201).json(student)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

export const allStudents = async (req,res) => {
  try{
    const students = await studentRecord.find()
    if(students.length === 0){
      return res.status(404).json({message: "No student found in Database"})
    }
    return res.status(200).json(students)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

export const findStudent = async (req,res) => {
  try{
    const student = await studentRecord.findById(req.params.id)
    if(!student){
      return res.status(400).json({message: "Student with that ID does not exist"})
    }
    res.status(200).json(student)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

export const updateStudent = async (req,res) => {
  try{
    const student = await studentRecord.findByIdAndUpdate(req.params.id , req.body)
    if(!student){
      return res.status(400).json({message: "Student with that ID does not exist and Unable to update"})
    }
    res.status(200).json(student)
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

export const deleteStudent = async (req,res) => {
  try{
    const student = await studentRecord.findByIdAndDelete(req.params.id)
    if(!student){
      return res.status(400).json({message: "Student with that ID does not exist and Unable to Delete"})
    }
    res.status(200).json({message: "Student deleted successfully!"})
  }catch(error){
    res.status(500).json({message:error.message})
  }
}
