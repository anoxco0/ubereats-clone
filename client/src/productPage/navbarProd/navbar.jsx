import "./navbar.css";
import { useDispatch } from "react-redux";
import { pageStatus } from "../../redux/action";
import { Menu } from "../../components/SVG/Menu";
import { useState } from "react";
import { Location } from "../../components/SVG/Location";
import { Search } from "../../components/SVG/Search";
import { Cart } from "../../components/SVG/Cart";
import { Login } from "../../components/SVG/Login";
import {useNavigate} from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const [btn, setBtn] = useState("Delivery");
  const location = "Calgary";

  return (
    <div>
      <div className="navMain">
        <div
          onClick={() => dispatch(pageStatus(true))}
          style={{ margin: "0 40px" }}
        >
          <Menu />
        </div>
        <div className="menudiv" style={{ cursor: "pointer" }}>
          <img
            id="uberEats"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg"
            alt=""
            onClick={()=>navigate('/')}
          />
        </div>
        <div className="delPic">
          <button
          onClick={()=>setBtn('Delivery')}
            style={{
              backgroundColor: btn === "Delivery" ? "white" : "transparent",
            }}
          >
            Delivery
          </button>
          <button
          onClick={()=>setBtn("Pickup")}
            style={{
              backgroundColor: btn === "Pickup" ? "white" : "transparent",
            }}
          >
            Pickup
          </button>
        </div>
        <div className="navLocation">
            <div style={{width:"25px", margin:"0 10px", cursor:"pointer"}}>
            <Location/>
            </div>
            <div style={{display:"flex", height:"inherit",alignItems:"center", margin:"0 10px", cursor:"pointer"}}>{location} <div style={{width:"4px", height:"4px", borderRadius:"50%", backgroundColor:"black", margin:"0 10px"}}></div> Now</div>
        </div>
        <div className="navSearch">
            <div style={{width:"15px", margin:"0 20px"}}><Search/></div>
            <input type="text" name="" id="" placeholder="Food, groceries, drinks, etc" />
        </div>
        <div className="navButtons">
            <div style={{backgroundColor:"black", color:"white"}}>
                <div style={{width:"20px"}}><Cart color={"white"}/> </div> <div>Cart</div>
            </div>
            <div>
                <div style={{width:"20px"}}><Login/> </div><div>Cart</div>
            </div>
            <div> Signup</div>
        </div>
      </div>
    </div>
  );
};
