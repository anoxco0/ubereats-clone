import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let email=localStorage.getItem("email");
  const navigate=useNavigate();
  const [pass,setpass]=useState("")
  const handlechange=(e)=>{
    setpass(e.target.value)
  }
  const handlesubmit=(e)=>{
    if (e.target.innerHTML === "Prev") {
      navigate("/");
    }
    axios.post("http://localhost:2345/login",{"email":email,"password":pass})
    .then(({data})=>alert(data))
  }


  
  return (
    <div className="abhiemail">
      <h1>Enter the password</h1>
      <h3> </h3>
      <div style={{ marginTop: "40px" }}></div>
      <input
        className="abhiinputbox"
        type="password"
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter the otp"
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
