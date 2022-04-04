import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { pageStatus } from '../redux/action';
import './navbaar.css'

export const Navbar = ()=>{
    if(!JSON.parse(localStorage.getItem('user'))) {

        localStorage.setItem('user', JSON.stringify('lock'))
    }
    const user = JSON.parse(localStorage.getItem('user'));

    const dispatch = useDispatch();
    const setBg = useSelector(({setNavBg})=>setNavBg.setNavBg)
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);
    const navSearch = useSelector((store)=>store.navSearch)
    return (
        <div className='navbar' style={{
            background:setBg, 
            }}>
          <div className='nav2' >
            <div style={{display:'flex'}}>
                <div onClick={()=>dispatch(pageStatus(true))} className="menudiv"><svg style={{ cursor:'pointer'}} className='menuicon' aria-hidden="true" focusable="false" viewBox="0 0 20 20"><path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path></svg></div>
                <div className='menudiv'style={{cursor:'pointer'}}><img id='uberEats' src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg" alt="" /></div>
            </div>
            
        {navSearch.navSearch?<div className='baseinp' style={{boxShadow:focused?'inset 0 -2px 0 black':"",
        position:'relative', transition:'all 0.5s'
    }}>
        <svg width="30px" height="30px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z" fill="#000000"></path></svg>
        <input type="text" placeholder='Enter delivery address' onFocus={onFocus} onBlur={onBlur} />
    </div>:""}
           {user==='lock'?<div >
                <Link to={'/email'}>
                    <button className={'signbtn'}>Sign in</button>
                </Link>
            </div>:<div></div>}
          </div>
        </div>
    )
}