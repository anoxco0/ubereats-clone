import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { password } from "../redux/action";
import { Nav } from "./Nav"


export const Password = ()=>{
    const emailStatus=useSelector(store=>store.emailStatus.emailStatus)
    const [bgcolor, setBgColor]=useState('#EEEEEE');
    const [color,setColor] = useState('#AFAFAF');
    const [jumpStatus, setJumpStatus] = useState(false);
    const [pass,setPass] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
    },[setBgColor,setColor])
    const handlechange = (e) => {
        setPass(e.target.value)
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
    const handleCursor=()=>{
        document.querySelector('.navbtn').style.background='#545454'
        if(jumpStatus===true){
          document.querySelector('.navbtn').style.cursor='pointer'
        }
        else{
          document.querySelector('.navbtn').style.cursor='not-allowed'
        }
      }
      const Email = useSelector(store=>store.email.email)
      const handlesubmit=(e)=>{
          const {value} = e.target;
          if(emailStatus===true){
            fetch("/login",{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ email:Email,password:pass })
            })
            .then((res)=>res.json()).then((data)=>{localStorage.setItem('user',JSON.stringify(data))})
            .catch(res=>res.json())

            navigate('/')
          }
          else if(value==='next'&&pass.length>=8){
            dispatch(password(pass))
             navigate('/name')
          }
      }
     

    return (

        <div>
            <Nav/>
            <div className="abhiemail">
               <div style={{textAlign:'left'}} id="whatmail">{emailStatus?`Welcome back, ${Email}`:"Create Your account Password"} </div>
               <div style={{margin:' 20px 0px'}}>Your password must be at least 8 characters long, and contain at least one letter and one digit</div>
               <input onChange={(e)=>{handlechange(e)}} className="abhiinputbox" required={true} placeholder="Enter your strong password" type="password" />
               <div style={{display:"flex",width:"100%",justifyContent:"space-between", padding:'50px 0px 0px'}}>
                    <Link to={'/Email'}>
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