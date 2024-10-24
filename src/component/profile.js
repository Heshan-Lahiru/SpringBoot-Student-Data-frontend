import React,{useState} from 'react'


export default function Profile() {
  
  const [selectedFile, setSelectedFileName] = useState('');
  const [selectedFileobject, setSelectedFileobject] = useState(null);
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      setSelectedFileobject(file);
    }
  };

     function datasave() {
try{

      let name=document.getElementById("input_name").value;
      let age=document.getElementById("input_age").value;
      let contact=document.getElementById("input_contact").value;
      let guardian_name=document.getElementById("input_guardian_name").value;
      let guardian_address=document.getElementById("input_guardian_address").value;
      let guardian_contact=document.getElementById("input_guardian_contact").value;
     
    if(name==="" || age==="" || contact==="" || guardian_name==="" || guardian_address==="" || guardian_contact ===""){
         alert("Fill form Correctly")
    }
else{
    
      let jsondata ={
    "profile_image" : selectedFile,
    "name" : name,
    "age" : age,
    "contact" : contact,
    "guardian_name" : guardian_name,
    "guardian_address" : guardian_address,
    "guardian_contact" : guardian_contact
}

        fetch("http://localhost:9070/postdata",
            {
                method : "POST",
                body : JSON.stringify(jsondata),
                headers : {
                  "content-type" : "application/json"
                }
              }
        )
        .then(res => res.json())
        .then(data =>{
            alert("Register Successfully");
            cleartypedata();
        })
      }
      }
      catch(error){
       console.log("error")
      }
        
    };

  function cleartypedata(){ 
     document.getElementById("input_name").value = "";
     document.getElementById("input_age").value = "";
     document.getElementById("input_contact").value = "";
     document.getElementById("input_guardian_name").value = "";
     document.getElementById("input_guardian_address").value = "";
     document.getElementById("input_guardian_contact").value = "";

  }

  return (
    <div>
      <div className="row">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">

      <div className="col-lg-7 text-center text-lg-start">
      <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteItzPyeDKBxyWiOA8xrPZXIlxOYv1b1VVg&s' alt='profileimage'/>
      <input class="form-control" type='file' onChange={onFileChange} ></input>
      </div>

      <div className="col-md-10 mx-auto col-lg-5">
        

        <div className="form-floating mb-3">
        <h5 style={{color:'blue'}}>Student Information</h5>
        <hr></hr>
        </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_name" placeholder="name"/>
            <label>Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_age" placeholder="age"/>
            <label >Age</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_contact" placeholder="contact"/>
            <label >Contact</label>
          </div>

          <div className="form-floating mb-3">
        <h5 style={{color:'blue'}}>Guardian Information</h5>
        <hr></hr>
        </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_name" placeholder="Guardian Name"/>
            <label >Guardian Name</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_address" placeholder="Guardian Address"/>
            <label >Guardian Address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="input_guardian_contact" placeholder="Guardian Contact"/>
            <label >Guardian Contact</label>
          </div>

          <button className="w-30 btn btn-lg btn-danger" onClick={cleartypedata} style={{marginRight:'30px'}}>Clear</button>
          <button className="w-30 btn btn-lg btn-primary"  onClick={datasave}>Register</button>
         
       
      </div>
    </div>
      </div>
    </div></div>
  )
}

