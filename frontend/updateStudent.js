const updateStudent = async (id) => {
  const updatedData = {
    email:document.querySelector('#update-email').value
  }
  try{
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedData)
    });
    if(response.ok){
      const result = await response.json()
      const {_id, name, email, student_id, gpa} = result
      const studentHTML = `
        <div class="g">
          <h3>${name}</h3>
          <p><strong>E-mail : </strong> ${email}</p>
          <p><strong>Student ID : </strong> ${student_id}</p>
          <p><strong>GPA : </strong> ${gpa}</p>
        </div>
      `
      document.querySelector('.updated-div').innerHTML = studentHTML
    }else{
      alert("error updating")
    }
  }catch(error){
    alert("update failed", error)
  }
}

export default updateStudent;