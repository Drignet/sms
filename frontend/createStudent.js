const createStudent = async () => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const student_id = document.querySelector('#student-id').value;
  const gpa = document.querySelector('#gpa').value;

  const studentData = {
    name,
    email,
    student_id,
    gpa,
  };

  try {
    const response = await fetch('http://localhost:3000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (response.ok) {
      const savedStudent = await response.json();
      alert(`${studentData.name} data Saved, your ID is ${savedStudent._id}`);
    } else {
      const errorResponse = await response.json();
      alert('Failed to save student data: ' + errorResponse.message);
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
};

export default createStudent