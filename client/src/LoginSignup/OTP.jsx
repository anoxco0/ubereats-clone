
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emailStatus } from "../redux/action";
import { Nav } from "./Nav";
import './otp.css';

export const OTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);
    const [bgcolor, setBgColor]=useState('#EEEEEE');
    const [color,setColor] = useState('#AFAFAF');
    const [jumpStatus, setJumpStatus] = useState(false);
    useEffect(()=>{
  
    },[setBgColor,setColor])
  const [otp, setOTP] = useState({
    one:'',
    two:'',
    three:'',
    four:''
  })
  const [data, setdata] = useState([]);
  useEffect(() => {
    
    fetch("/mailer").then((res)=>res.json()).then((data)=>{setdata(data)})
  }, [setdata]);

  const linkValues = (e)=>{
       const {id,value} = e.target;
       setOTP({...otp,[id]:value})
  }
  
  const otpReady = (otp.one+otp.two+otp.three+otp.four);
  useEffect(()=>{
  if(otpReady.length===4){
    setJumpStatus(true);
  } else{setJumpStatus(false)}
  
  },[otpReady])
  const handleCursor=()=>{
  document.querySelector('.navbtn').style.background='#545454'
  if(jumpStatus===true){
    document.querySelector('.navbtn').style.cursor='pointer'
  }
  else{
    document.querySelector('.navbtn').style.cursor='not-allowed'
  }
  }
  useEffect(()=>{
    if (otpReady === data.otp) {
      localStorage.setItem("email",data.email);
      fetch(`/user/${data.email}`).then((res) => res.json()).then((tdata)=>{
        if(tdata.length!==0) dispatch(emailStatus(true))
        else dispatch(emailStatus(false))
      })

      navigate("/password")
    }

  },[data.email, data.otp, dispatch, navigate, otpReady])


  return (
    <div className="abhiOtp">
      <Nav />
      <div className="abhiemail">
        <div id="whatmail">Enter the 4-digit code <b>{data.otp}</b> :</div>
        
        <div style={{display: "flex", margin:'16px 0px 40px'}} id="otp-container">
          <input  type="phone" minLength='1' maxLength="1" 
          onChange={(e)=>{linkValues(e)}}
          onFocus={onFocus} onBlur={onBlur} id="one"
          style={{boxShadow:focused?'inset 0 -2px 0 black':"",
          position:'relative', transition:'all 0.5s'}} />

          <input id="two" onChange={(e)=>{linkValues(e)}}
          onFocus={onFocus} onBlur={onBlur}
          style={{boxShadow:focused?'inset 0 -2px 0 black':"",
          position:'relative', transition:'all 0.5s'}}
          maxLength="1" type="phone" />
        
          <input id="three" onChange={(e)=>{linkValues(e)}}
          onFocus={onFocus} onBlur={onBlur}
          style={{boxShadow:focused?'inset 0 -2px 0 black':"",
          position:'relative', transition:'all 0.5s'}}
          maxLength="1" type="phone" />

         <input id="four" onChange={(e)=>{linkValues(e)}}
         onFocus={onFocus} onBlur={onBlur}
          style={{boxShadow:focused?'inset 0 -2px 0 black':"",
          position:'relative', transition:'all 0.5s'}}
          maxLength="1" type="phone" />
        </div>
        <div style={{display:"flex",width:"100%",justifyContent:"space-between", padding:'30px 0px'}}>
          <div>
            <Link to={'/email'}>
              <button
                value={'prev'}
                style={{ background:bgcolor, color:color, fontSize:'16px', fontWeight:'500', lineHeight:'20px', height:"52px",padding:"14px 16px", borderRadius:"30px", border:"transparent"}}
                type="submit"
                onClick={e=>{navigate('/Email')}}
              > 
              <span className="material-icons-outlined">west</span>
              </button>
            </Link> 
          </div>
          <div>
            <button className="navbtn"
              value={'next'}
              style={{ background:bgcolor, color:color, fontSize:'16px', fontWeight:'500', lineHeight:'20px'}}
              type="submit"
              onMouseOver={handleCursor}
            >
            Next <span className="material-icons-outlined">east</span>
            </button>
          </div>
      </div>
    </div>
  </div>
  );
};
