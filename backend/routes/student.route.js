import express from "express";
const router = express.Router()
import {addStudent, findStudent, updateStudent,allStudents, deleteStudent} from "../controllers/students.controller.js";

router.post('/', addStudent)
router.get('/:id', findStudent)
router.get('/', allStudents)
router.patch('/:id', updateStudent)
router.delete('/:id', deleteStudent)

export default router