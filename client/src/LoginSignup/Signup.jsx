import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Signup = () => {
    let email=localStorage.getItem("email");
    const init = {
        email:email,
        firstname: "",
        lastname: "",
        location: "",
        mobileno: "",
        password: ""
      };
  const navigate=useNavigate()
  const [signup, setsignup] = useState(init);
  
  const handlechange = (e) => {
    let {id,value}=e.target;
    setsignup((prev)=>({...prev,[id]:value}))
  };
  const handlesubmit = (e) => {
    if(e.target.innerHTML === "Next"){
      axios.post("http://localhost:2345/register",signup)
    .then((res)=>{
      if(res.data.token){
        navigate("/login")
      }
      else{
        alert(res.data)
      }
    })
    }
    if (e.target.innerHTML === "Prev") {
      navigate("/");
    }
    
  };
  return (
    <div className="abhiemail">
      <h1>Enter credentials</h1>
      <h3> </h3>
      <div style={{ marginTop: "40px" }}></div>
      <label>FIRST NAME</label>
      <input
        className="abhiinputbox"
        id="firstname"
        type="text"
        
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter first name"
      />
      <br />
      <br />
      <label>LAST NAME</label>
      <input
        className="abhiinputbox"
        id="lastname"
        type="text"
        
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter last name"
      />
      <br />
      <br />
      <label>LOCATION</label>
      <input
        className="abhiinputbox"
        id="location"
        type="text"
        
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter location"
      />
      <br />
      <br />
      <label>MOBILE NO</label>
      <input
        className="abhiinputbox"
        id="mobileno"
        type="text"
        
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter mobileno"
      />
      <br />
      <br />
      <label>PASSWORD</label>
      <input
        className="abhiinputbox"
        id="password"
        type="password"
        
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter password"
      />
      <div style={{ marginTop: "40px" }}></div>
      <p>Tip : Make sure to check your password is correct or not</p>
      <div style={{ marginTop: "40px" }}></div>
      <div style={{ display: "flex" }}>
        <button className="abhibtn" type="submit" onClick={handlesubmit}>
          <div>Prev</div>
        </button>
        <button
          className="abhibtn"
          style={{ marginLeft: "300px" }}
          type="submit"
          onClick={(e) => handlesubmit(e)}
        >
          <div>Next</div>
        </button>
      </div>

      <div style={{ marginTop: "40px" }}></div>
    </div>
  );
};
