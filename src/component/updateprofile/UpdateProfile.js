import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


export default function UpdateProfile() {
  const Navigate =useNavigate();

const Location = useLocation();
const Student =Location.state;

function updatedata(){
    let myid = Student.id;

    let name=document.getElementById("input_name").value;
    let age=document.getElementById("input_age").value;
    let contact=document.getElementById("input_contact").value;
    let guardian_name=document.getElementById("input_guardian_name").value;
    let guardian_address=document.getElementById("input_guardian_address").value;
    let guardian_contact=document.getElementById("input_guardian_contact").value;


    let jsondata ={
        "profile_image" : name,
        "name" : name,
        "age" : age,
        "contact" : contact,
        "guardian_name" : guardian_name,
        "guardian_address" : guardian_address,
        "guardian_contact" : guardian_contact
    }
    
            fetch("http://localhost:9070/postdata/"+ myid,
                {
                    method : "PUT",
                    body : JSON.stringify(jsondata),
                    headers : {
                      "content-type" : "application/json"
                    }
                  }
            )
            .then(res =>
              alert(" Update Successfully"),
              Navigate('/studenttable')
              )
    
    
        };

  return (
    <div>
     <div>
      <div className="row">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">

      <div className="col-lg-7 text-center text-lg-start">
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s' alt='profileimage'/>
      <input className="form-control" type='file' ></input>
      </div>

      <div className="col-md-10 mx-auto col-lg-5">
        

        <div className="form-floating mb-3">
        <h5 style={{color:'blue'}}>Student Information</h5>
        <hr></hr>
        </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control"  id="input_name" placeholder="name"/>
            <label>{Student.name}</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_age" placeholder="age"/>
            <label >{Student.age}</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_contact" placeholder="contact"/>
            <label >{Student.contact}</label>
          </div>

          <div className="form-floating mb-3">
        <h5 style={{color:'blue'}}>Guardian Information</h5>
        <hr></hr>
        </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_name" placeholder="Guardian Name"/>
            <label >{Student.guardian_name}</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_address" placeholder="Guardian Address"/>
            <label >{Student.guardian_address}</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_contact" placeholder="Guardian Contact"/>
            <label >{Student.guardian_contact}</label>
          </div>

          <button className="w-30 btn btn-lg btn-primary"  onClick={updatedata}>Update</button>
         
       
      </div>
    </div>
      </div>
    </div></div>
    </div>
  )
}
