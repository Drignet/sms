const findAllStudents = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/students', {
      method: 'GET'
    });

    if (response.ok) {
      const students = await response.json();
      
      document.querySelector(".all").innerHTML = '';

      const studentsHTML = students.map((student) => {
        return `<div class="g">
                  <h3>${student.name}</h3>
                  <p>Email: ${student.email}</p>
                  <p>Student ID: ${student.student_id}</p>
                  <p>GPA: ${student.gpa}</p>
                </div>`;
      });
      
      document.querySelector(".all").innerHTML = studentsHTML;
    } else {
      alert("No students found!");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
}

export default findAllStudents;