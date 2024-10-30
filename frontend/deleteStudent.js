const deleteStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/students/${id}`, {
      method : 'DELETE',
      headers : {'Content-Type' : 'application/json'
      }
      });
      if(response.ok){
        alert("student deleted successfully")
      }else{
        alert("Failed to delete")
      }
  } catch (e) {
    alert(`failed to delete student, ${e.message}`)
  }
}

export default deleteStudent