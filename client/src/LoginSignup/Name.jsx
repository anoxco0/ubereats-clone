
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Nav } from "./Nav"


export const Name = ()=>{
    const navigate = useNavigate();
    const [bgcolor, setBgColor]=useState('#EEEEEE');
    const [color,setColor] = useState('#AFAFAF');
    const [jumpStatus, setJumpStatus] = useState(false);
    const [name,setName] = useState({
       firstName:'',
       lastName:''
    })

    const [signup,setSignup] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })
    signup.email=useSelector((store)=>store.email.email);
    signup.password=useSelector((store)=>store.password.password);
    useEffect(()=>{
    },[setBgColor,setColor])
    const handlechange = (e) => {
        const {value,id} = e.target;
        setSignup({...signup,[id]:value})
        if(signup.firstName.length>2&&signup.lastName.length>2){
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
    const handleCursor=()=>{
        document.querySelector('.navbtn').style.background='#545454'
        if(jumpStatus===true){
          document.querySelector('.navbtn').style.cursor='pointer'
        }
        else{
          document.querySelector('.navbtn').style.cursor='not-allowed'
        }
      }
      const handlesubmit=(e)=>{
          if(signup.firstName.length>2&&signup.lastName.length>2&&signup.email.length!==0&&signup.password.length!==0){
            fetch("/register",{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ firstName:signup.firstName,lastName:signup.lastName,email:signup.email,password:signup.password })
            })
            .then((res)=>res.json()).then((data)=>{localStorage.setItem('user',JSON.stringify(data))})
            .catch(res=>res.json())
              
            
              navigate("/allSet");
          }
      }
    return (
        <div>
            <Nav />

            <div className="abhiemail" style={{textAlign:'left'}}>
                <div id="whatmail">What's your name?</div>
                <div style={{marginBottom:'20px'}}>Let us know how to properly address you</div>
                <input onChange={(e)=>{handlechange(e)}} type="text" name="" id="firstName" className="abhiinputbox" placeholder="First Name"/>
                <input onChange={(e)=>{handlechange(e)}} type="text" name="" id="lastName" className="abhiinputbox" placeholder="Last Name" />
                <div  style={{display:"flex",width:"100%",justifyContent:"space-between", padding:'50px 0px 0px'}}>
                    <Link to={'/email'}>
                        <button
                        value={'prev'}
                        style={{ background:bgcolor, color:color, fontSize:'16px', fontWeight:'500', lineHeight:'20px', height:"52px",padding:"14px 16px", borderRadius:"30px", border:"transparent"}}
                        type="submit"
                        // onClick={e=>{handlesubmit(e)}}
                        > 
                           <span className="material-icons-outlined">west</span>
                        </button>
                    </Link> 
                        <button className="navbtn"
                            value={'next'}
                            style={{ background:bgcolor, color:color, fontSize:'16px', fontWeight:'500', lineHeight:'20px'}}
                            type="submit"
                            onClick={e=>{handlesubmit(e)}}
                            onMouseOver={handleCursor}
                        >
                        Next <span className="material-icons-outlined">east</span>
                        </button>
               </div>
            </div>
        </div>
    )
}