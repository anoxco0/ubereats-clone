import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../navbarProd/navbar";
import { IoStarSharp } from "react-icons/io5";
import { nanoid } from "nanoid";

export const ProductDetails=()=>{
    const [prod,setProd]=useState({});
    const {id}=useParams();
    useEffect(()=>{
      fetch(`/products/${id}`).then((res)=>res.json()).then((data)=>{setProd(data[0])})
    },[id]);
    
     const cart = (prod) => {
            let cartdata=JSON.parse(localStorage.getItem("uber")) || [];
            let obj={
                    name:prod.title,
                    price:prod.price,
                    img:prod.img,
                }
               cartdata.push(obj)

            localStorage.setItem("uber",JSON.stringify(cartdata))
          }
    
   

const prodr=[
                {img:"https://d1ralsognjng37.cloudfront.net/6a2972f8-55a5-4fd3-8625-60a123493fb5.jpeg",
                title:"Chick-Fil-A (660 S fig)",
                rating:4.7,
                time:25,
                del:"$ 0"
                },
                {img:"https://tb-static.uber.com/prod/image-proc/processed_images/1584c978a66f6cf3ae2945aaef9e282b/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
                title:"Shake Shack (400 W. 8th Street)",
                rating:4.5,
                time:27,
                del:"$ 0.49"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/0e9dfbc2-0d7c-40ce-a9b4-f314ec9e59bc.jpeg",
                title:"7-Eleven (1463 W 3Rd St)",
                rating:4.6,
                time:20,
                del:"$ 0.49"
                },
                {img:"https://tb-static.uber.com/prod/image-proc/processed_images/ff588a5599682276f2ba3ffaa012b9ce/445a4b2618e10f7db95d4f17a85b117d.jpeg",
                title:"Popeyes (2532 S Figueroa St)",
                rating:4.0,
                time:35,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/f1907bdd-e377-4dcc-83fc-caf39f25b342",
                title:"Tender Greens (505 W 6th St.)",
                rating:4.7,
                time:25,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/6adb2c03-735d-4937-a267-227a238a9f6c.jpeg",
                title:"Calif. Chicken Cafe LA..",
                rating:4.7,
                time:25,
                del:"$ 0"
                },
                {img:"https://duyt4h9nfnj50.cloudfront.net/resized/1533836274564-w1080-8f.jpg",
                title:"LA Cafe",
                rating:4.74,
                time:25,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/d9f46cfc-faf2-4867-bab2-2c1617720d93.jpeg",
                title:"Silverlake Ramen (DTLA)",
                rating:4.8,
                time:30,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/39761e52-6da4-4266-ab6e-22160e3b687d.jpeg",
                title:"New Golden Lake Eatery",
                rating:4.6,
                time:25,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/4b622271-3776-4f65-bc8d-1d14f3383699.jpeg",
                title:"Bossa Nova Brazilian",
                rating:4.7,
                time:40,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/8f27e3dd-696b-4009-bfe5-4dc85372314a.jpeg",
                title:"BEST FCKN PIZZA",
                rating:4.5,
                time:45,
                del:"$ 6.49"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/6f8556ed-ded6-40f1-a788-c3ae2c09e8cc.jpeg",
                title:"Fatburger & Buffalo's",
                rating:4.0,
                time:35,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/84551c12-3705-46ca-93e2-79efc49d8973.jpeg",
                title:"SushiStop (Hollywood)",
                rating:4.7,
                time:38,
                del:"$ 0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/1ce9c150-2e08-4384-b93d-8ee490f580f7.jpeg",
                title:"ITALIAN PASTA CO.",
                rating:4.7,
                time:25,
                del:"$ 5.49"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/f5e9d749-0eb2-4d4b-b3b6-2df8f477dec7.jpeg",
                title:"SushiStop Burbank",
                rating:4.1,
                time:28,
                del:"$ 7.0"
                },
                {img:"https://d1ralsognjng37.cloudfront.net/dfade57d-4304-460d-8b07-ded71cbe8483.jpeg",
                title:"Jack in the Box",
                rating:4.2,
                time:20,
                del:"$ 10"
                }
            ];
    return(
        <div>
        <Navbar/>
        <div style={{width:"100%"}}><img className="prim" height="300px" width="100%" src={prod.img} alt="" /></div>
        <div><h1>{prod.title}</h1></div>
        <div><h4><IoStarSharp/> Rating  {prod.rating} (500+ Ratings) </h4></div>
        <h4>Time : {prod.time}-{prod.time+10} Min</h4>
        <Link to={'/payment'}><button style={{fontSize:"16px",padding:"12px 16px",border:"transparent",background:'#EEEEEE', borderRadius:'5px',cursor:'pointer'}} onClick={()=>{cart(prod)}}>Add To Cart</button></Link>
        <div  style={{display:"flex"}}>
            <div className="dinner"><div><h1>Dinner</h1></div>
            <p>5:00 PM – 3:59 AM</p>
            </div>
            <div className="dinner"><div><h1>Breakfast</h1></div>
            <p>4:00 AM – 10:29 AM</p></div>
            <div className="dinner"><h1>Lunch</h1><p>10:30 AM – 4:59 PM</p></div>
        </div>
        <h1 className="tdsp">Most Popular</h1>



        <div style={{display:"flex"}}>
            <div className="leftpd">
                <h3>Most Popular</h3>
                <h3>Combo Meals</h3>
                <h3>Shareables</h3>
                <h3>Promotions</h3>
                <h3>Sweets & Treats</h3>
                <h3>Happy Meal</h3>
                <h3>Condiments</h3>
                <h3>Fries, Sides & More</h3>
                <h3>McCafé</h3>
                <h3>McCafé Bakery</h3>
                <h3>Beverages</h3>
                <h3>Individual Items</h3>
            </div>
           
            <div className="rightpd" style={{cursor:'pointer'}}>
                
                {prodr.map((e)=>{
                    return( <div className="prduct" key={nanoid()}>
                    <div className="pdimage"><img  height= "190px"
                    width = "270px" src={e.img} alt="" /></div>
                    <div style={{display:"flex"}}>
                        <div className="prtitle">{e.title}</div>
                        <div className="rating">{e.rating}</div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div>{e.del} Delivery Fee</div>
                        <div>{e.time}-{e.time+10} Min</div>
                    </div>
                </div>)
                })}

            </div>

        </div>
        </div>
    )

}
