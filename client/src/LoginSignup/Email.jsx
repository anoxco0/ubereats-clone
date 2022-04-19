import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "./Nav";
import './mail.css';
import { useDispatch } from "react-redux";
import { email } from "../redux/action";

export const Email = () => {
  const dispatch = useDispatch();
  const [temail, setemail] = useState("");
  const [bgcolor, setBgColor]=useState('#EEEEEE');
  const [color,setColor] = useState('#AFAFAF');
  const [jumpStatus, setJumpStatus] = useState(false);
  
  useEffect(()=>{
  },[setBgColor,setColor])
   dispatch(email(temail));
  const navigate = useNavigate();
  const otp = Math.floor(1000 + Math.random() * 9000);
  const handlechange = (e) => {
    setemail(e.target.value);
    if(e.target.value.length>0){
      setBgColor('black');
      setColor('white');
      setJumpStatus(true);
    }
    else{
      setBgColor('#EEEEEE')
      setColor('#AFAFAF')
      setJumpStatus(false);
    }
  };
  const handlesubmit = (e) => {
    if(jumpStatus){
      fetch("/mailer",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email: temail, otp: otp })
    })
    .then(function(res){ })
    .catch(function(res){ })
      
     
      navigate("/otp");
    }
  };
  const handleCursor=()=>{
    document.querySelector('.abhibtn button').style.background='#545454'
    if(jumpStatus===true){
      document.querySelector('.abhibtn button').style.cursor='pointer'
    }
    else{
      document.querySelector('.abhibtn button').style.cursor='not-allowed'
    }
  }
  return (
    <div >
      <Nav />
      <div className="abhiemail">
      <div id="whatmail">What's your phone number or email?</div>
      <input
        className="abhiinputbox"
        type="email"
        required={true}
        onChange={(e) => {
          handlechange(e);
        }}
        placeholder="Enter your email"/>
      <div style={{ marginTop: "28px" , fontSize:'14px', lineHeight:'20px', color:'#757575'}}>
      By proceeding, you consent to get calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </div>
        
      <div style={{ marginTop: "40px" }}></div>
      <div className="abhibtn">
        <button
          style={{ background:bgcolor, color:color, fontSize:'16px', fontWeight:'500', lineHeight:'20px'}}
          type="submit"
          onClick={handlesubmit}
          onMouseOver={handleCursor}
        >
          Next <span style={{color:"white"}} className="material-icons-outlined">
        east
        </span>
        </button>
      </div>

      <div style={{ marginTop: "40px" }}></div>
      <div id="abhicap" style={{fontSize:'12px', lineHeight:'20px'}}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a id="termsOfServiceLink" href="https://policies.google.com/terms">
            Terms of Service
          </a>{" "}
          apply.
      </div>
      </div>
    </div>
  );
};
