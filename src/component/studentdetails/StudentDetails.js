import React,{useState} from 'react'
import Nav from '../nav/nav'
import { useNavigate } from 'react-router-dom';

export default function StudentDetails() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

   function StudentDetails() {
  

   
    let tbl =document.getElementById("tblid");

        fetch("http://localhost:9070/postdata",
            {
                method: "GET",
                headers : 
                {
                    "content-type" : "application/json"
                }
            }
        )
        .then(res => res.json())
        .then(data =>{
            setStudents(data);
        })
    }


function deletestudent(id){
    console.log(id)

   fetch("http://localhost:9070/postdata/"+ id,
    {
        method : "DELETE",
  
    }
   )
   .then(res =>{
    console.log("deleted")
    alert("delete student successfully .....")
   })
}

function updatestudent(student){
    navigate(`/updateprofile/${student.id}` , {state: student});
}

  return (
    <div>
      
      <Nav/>
      <table className="table" id ="v">
  <thead className="thead-dark">
    <tr>
    <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
          {students.map((studentdata, index) => (
            <tr key={index}>
              <td>{studentdata.id}</td>
              <td>{studentdata.name}</td>
              <td>{studentdata.age}</td>
              <td>{studentdata.guardian_address}</td>
              <td><button className='btn btn-danger'   onClick={() => deletestudent(studentdata.id)}>Delete</button></td>
              <td><button className='btn btn-primary' onClick={() => updatestudent(studentdata)}>Update</button></td>
            </tr>
          ))}
        </tbody>
</table>

<button onClick={StudentDetails()}></button>

    </div>
  )
}
