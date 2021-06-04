import React,{useContext} from 'react'
import "./Menu.css"
import {ThemeContext} from "../context/ThemeContext"
import Search from './Search'

 const Menu = ({data,onClick}) => {
    let theme=useContext(ThemeContext)
    return (
        <div style={{background:theme.background2,color:theme.foreground}} className="containr-menu">
            <div className="link" href="#">Home</div>
            <div className="link" href="#">About</div>
            <div className="link" href="#">Services</div>
            <div className="link" href="#">contacts</div>
            <div className="link" href="#">More</div>
       <Search onClick={onClick} data={data}/>
        </div>
    )
}
export default Menu
