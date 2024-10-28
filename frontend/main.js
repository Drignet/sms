import createStudent from "./createStudent.js";
import findAllStudents from "./findAllStudents.js";
import findStudent from "./findStudent.js";
import updateStudent from "./updateStudent.js";
import deleteStudent from "./deleteStudent.js";

document.addEventListener('DOMContentLoaded', () => {
const submitBtn = document.querySelector('#button')
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  createStudent()
})
})

document.addEventListener('DOMContentLoaded', () => {
    const allStudentsBtn = document.querySelector('#allBtn'); 
    allStudentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        findAllStudents()
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const findBtn = document.querySelector('#find-button');
  findBtn.addEventListener('click', (e) => {
    e.preventDefault();
  const id = document.querySelector('#student-id').value
  findStudent(id)
})
})

document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.querySelector('#update-button');
  
  updateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const id = document.querySelector('#update-student-id').value
    updateStudent(id)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const delBtn = document.querySelector('#delete-button');
  delBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const id = document.querySelector("#del-id").value;
    deleteStudent(id)
  })
})



