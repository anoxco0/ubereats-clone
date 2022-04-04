import { useState,useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { pageStatus } from '../redux/action';
import './base.css'
import { Login } from './Login'
import { SearchBox } from './SearchBox';



export const Base = ()=>{
  
    const page = useSelector((store)=>store.openPage);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);
    const buttonClickedOutside = useOutsideClick(buttonRef);
    const navigate = useNavigate()
    useEffect(() => {
      // if the the click was outside of the button
      // do whatever you want
      if (buttonClickedOutside) {
        dispatch((pageStatus(false)))
      }
    }, [buttonClickedOutside]);

    //responsive
    const [windowSize, setWindowSize] = useState(null)


useEffect(() => {
    const handleResize = () => 
        setWindowSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
}, [])
    
    return(
        <div 
           className='base'
           style={{
               background:windowSize>913?'url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/e6b11dc56fb50db03a2e1370a9a7bba5.svg)  left top no-repeat, url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7fc854e8448107a55583d296c2155d8b.svg) right top no-repeat, #ffc043':'url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/e6b11dc56fb50db03a2e1370a9a7bba5.svg)  no-repeat,#ffc043',
               backgroundSize:windowSize>913?'':'cover'
            }}  
        >
            <div className='signinpage'   style={{display:page.openPage?'block':'none'}}></div>
            <div ref={buttonRef}  style={{
                    translateX:'-300px',                  
                    transform:page.openPage?'translateX(300px)':'translateX(-300px)',
                     transition:'all 1s'
                     }} className='signin'>
                   <Login /> 
                </div>
           <div className='subbase'>
                <div id='h1'>Order food to your door</div>
                <div id='inparea'>
                {/* box-shadow: 0 0 1px #fff inset */}
                   <SearchBox />
                    <button onClick={()=>navigate('/product')}>Find Food</button>
                </div>
                <div id='subbasesign'>Sign in for your recent addresses</div>
           </div>
        </div>
    )
}

//when sidelogin page opened and clicked outside then this function will work
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










