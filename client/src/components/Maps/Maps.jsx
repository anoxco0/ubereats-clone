import { useEffect, useState } from 'react';
import './maps.css';

export const Maps = ()=>{
    const [country, setCountry]= useState([]);
    const [cities, setCities] = useState([]);
    const [maps, setMap] = useState('');
    useEffect(()=>{
        fetch("/countries").then((res)=>res.json())
        .then((data)=>{setCountry(data); setCities(data[0].cities); setMap(data[0].img)});
    },[])
    return (
        <div className='map'>
           <div>
               <h1>Cities near me</h1>
               <div id='map' >
                       <img width='100%' src={maps} alt="" />
               </div>
               <div className='cities'>
                    {cities.map((element,i)=>
                        <div key={i}>{element}</div>
                    )}
               </div>
               <h1>Countries with Uber Eats</h1>
               <div className='countries cities'>
                   {country.map((elements,i)=>
                     <div onClick={()=>{fetch(`/countries/${elements.country}`).then((res)=>(res.json())).then((data)=>{setCities(data[0].cities); setMap(data[0].img)});}} key={i}>{elements.country}</div>
                   )}
               </div>
           </div>
        </div>
    )
}