const findStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
      method: 'GET'
    });
    if (response.ok) {
      const student = await response.json();
      const {name, email, student_id, gpa} = student
      const studentHTML = `
        <div class="student-info">
          <h3><strong>Name : </strong> ${name}</h3>
          <p><strong>E-mail : </strong> ${email}</p>
          <p><strong>Student ID : </strong> ${student_id}</p>
          <p><strong>GPA : </strong> ${gpa}</p>
        </div>
      `
      document.querySelector('.student-div').innerHTML = studentHTML
    } else {
      alert("No student found!");
    }
  } catch (error) {
    alert(`Error: No student with ID ${id} found!`);
  }
};

export default findStudent;
