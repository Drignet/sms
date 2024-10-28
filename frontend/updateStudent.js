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
      alert(JSON.stringify(result))
    }else{
      alert("error updating")
    }
  }catch(error){
    alert("update failed", error)
  }
}

export default updateStudent;