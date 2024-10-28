const deleteStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
      method : 'DELETE',
      headers : {'Content-Type' : 'application/json'
      }
      });
      if(response.ok){
        const student = await response.json()
        alert("student deleted successfully" , JSON.stringify(student))
      }else{
        alert("Failed to delete")
      }
  } catch (e) {
    alert(`failed to delete student, ${e.message}`)
  }
}

export default deleteStudent