import { Navbar } from "../navbarProd/navbar";
import advert from "./kach.png"
import ld from "./ldiv.png"
import cat from "./cat.png"
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useState } from "react";
import './product.css'
import { Login } from "../../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { pageStatus } from "../../redux/action";


export const Product=()=>{
    const page = useSelector((store)=>store.openPage);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);
    const buttonClickedOutside = useOutsideClick(buttonRef);
    useEffect(() => {
        // if the the click was outside of the button
        // do whatever you want
        if (buttonClickedOutside) {
          dispatch((pageStatus(false)))
        }
      }, [buttonClickedOutside, dispatch]);
    const data=[
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
            title:"Deals"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/grocery.png",
            title:"Groceries"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
            title:"Convenience"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
            title:"Alcohol"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png",
            title:"Pharmacy"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png",
            title:"Baby"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/specialty_foods.jpg",
            title:"Speciality Foods"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/pet_supplies.jpg",
            title:"Pet Supplies"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/flowers.jpg",
            title:"Flowers"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png",
            title:"Retail"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png",
            title:"Best Overall"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bakery.png",
            title:"Bakery"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png",
            title:"Coffee and Tea"
        },
        {
            img:"https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bubbletea.png",
            title:"Bubble Tea"
        },

    ];
    const[prod,setProd]=useState([]);
    useEffect(()=>{fetch("/products").then((res)=>res.json()).then((data)=>{setProd(data)})},[]);
    const grocery=[
        {img:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9zdG9yZXMtbG9nb3MuY29ybmVyc2hvcGFwcC5jb20vc3RvcmUtdGlsZXMvdjEvY2Fyb3VzZWxfc2l6ZS8yYzJhMjkvaW1nX2ZpbGVfbG9nb183NTUwZGVkMy05MWY2LTQzOWUtOGNiZS03NGYzMjlkNDVkZGIucG5nP3ZlcnNpb25JZD12Tld3Q0tQMDk4c1VHeU1mXzlmQWVPVzRuTXFhMTAuTA==",
         title:"Pavilions"
        },
        {img:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9zdG9yZXMtbG9nb3MuY29ybmVyc2hvcGFwcC5jb20vc3RvcmUtdGlsZXMvdjEvY2Fyb3VzZWxfc2l6ZS8wMDAwMDAvaW1nX2ZpbGVfbG9nb19kNzRhMjZiMS1kNWNkLTQ5MTktYjIzOC0xYWNmNjdjNDVkNTAucG5nP3ZlcnNpb25JZD1UeGd4QVN0eGd0T2FHa2tjcHVEbC5rWXBwUExyNzNRXw==",
        title:"Erewhom Market"
       },
       {img:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9zdG9yZXMtbG9nb3MuY29ybmVyc2hvcGFwcC5jb20vc3RvcmUtdGlsZXMvdjEvY2Fyb3VzZWxfc2l6ZS9lNDE3MjAvaW1nX2ZpbGVfbG9nb19hNTAzNmJmZS1jODRkLTQwNGQtYTdlZC01ODEwN2Q1MGU4NjQucG5nP3ZlcnNpb25JZD1XYXk2bTc0dnZ2UEtPaFZDa3VfM0tRWHE0VXJ5SHhweQ==",
       title:"vons"
      },
      {img:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9jYXRhbG9nLXViZXItc3RhdGljLmNvcm5lcnNob3BhcHAuY29tL3ViZXItY2Fyb3VzZWwtbG9nb3MvYnJhbmNoX2FyZWFfMzI5MjY3LnBuZw==",
      title:"Albertsons"
     },
    ];


const rating =()=>{
    
        const d=prod.sort((a,b)=>{
            return b.rating-a.rating
        });
        setProd([...d])
    }
 const ratd=()=>{
    const d=prod.sort((a,b)=>{
        return a.rating-b.rating
    });
    setProd([...d])
 }
 const time=()=>{
    const d=prod.sort((a,b)=>{
        return a.time-b.time
    });
    setProd([...d])
 }   

    
    
    return <div>
        <Navbar/>
        <div className='signinpage'   style={{display:page.openPage?'block':'none'}}></div>
            <div ref={buttonRef}  style={{
                    translateX:'-300px',                  
                    transform:page.openPage?'translateX(300px)':'translateX(-300px)',
                     transition:'all 1s'
                     }} className='signin'>
                   <Login /> 
                </div>
        <div className="deals">{data.map((e)=>{return <div key={nanoid()} className="dealsi"><img className="hov" height="60px" width="60px" src={e.img} alt="" /><div>{e.title}</div>
        </div>})
        }</div>
        <div className="advert">
            <img width="1300px" src={advert} alt="advert" />
        </div>
        {/* product div */}
    <div className="mdiv">
        <div className="ldiv"><h1>All Stores</h1>
            <div className="sort"><h3>Sort</h3>
            <input className="round" type="checkbox" defaultChecked/> Picked for you (default)<br></br>
            <input className="round" type="checkbox" onChange={rating}/> Most popular<br></br>
            <input className="round" type="checkbox" onChange={ratd}/> Rating<br></br>
            <input className="round" type="checkbox" onChange={time}/> Delivery time</div>
            <div>
                <img height="600px" src={ld} alt="" />
            </div>
        </div>
        {/* products showing */}
        <div className="rdiv">
            <h1>Grocery</h1>
            <div style={{display:"flex"}}>
                {grocery.map((e)=>{return <div key={nanoid()} className="grocery"><img height="150px" width="250px" src={e.img} alt="" /><div>{e.title}</div></div>})}
            </div>
            <h1>Today's Offer</h1>
            <div className="prodiv" style={{height:'500px', overflow:"scroll",}}>
                {prod.map((e)=>{
                    return <Link className="link" key={e.id} to={`/product/${e.id}`}>
                        <div className="prduct" key={e._id}>
                        <div className="pdimage"><img  height= "190px"
                        width = "270px" src={e.img} alt="" /></div>
                        <div style={{display:"flex"}}>
                            <div className="prtitle">{e.title}</div>
                            <div className="rating">{e.rating}</div>
                        </div>
                        <div style={{fontWeight:"bold"}}>Price : $ {e.price}</div>
                        <div style={{display:"flex"}}>
                            <div>{e.del} Delivery Fee</div>
                            <div>{e.time}-{e.time+10} Min</div>
                        </div>
                    </div>
                    </Link>
                })}
            </div>
            <div className="cat">
                <img height="210px" width="1081px" src={cat} alt="" />
            </div>
        </div>
        
    </div>
    </div>
   
    

}

const useOutsideClick = (ref) => {
    const [outsieClick, setOutsideClick] = useState(null);
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOutsideClick(true);
        } else {
          setOutsideClick(false);
        }
  
        setOutsideClick(null);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  
    return outsieClick;
  };