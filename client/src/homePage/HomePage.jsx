import { useDispatch } from "react-redux"
import { Base } from "../components/Base"
import { Bussiness } from "../components/Bussiness"
import { Footer } from "../components/Footer"
import { Maps } from "../components/Maps"
import { Navbar } from "../components/Navbar"
import { navSearch, setNavBg } from "../redux/action"


export const HomePage = ()=>{
    const dispatch = useDispatch();
    const handleScroll = (event)=>{
        if(event.target.scrollTop>358)
           dispatch(navSearch(true))
        else
            dispatch(navSearch(false))
            
        if(event.target.scrollTop>2)
           dispatch(setNavBg('white'))
        else
            dispatch(setNavBg('transparent'))     
    }
    return (
        <div 
            onScroll={(e)=>{handleScroll(e)}}
            style={{
                overflowY:'scroll',maxHeight:'100vh'
            }}>
            <Navbar />
            <Base />
            <Bussiness/>
            <Maps />
            <Footer />
        </div>
    )
}