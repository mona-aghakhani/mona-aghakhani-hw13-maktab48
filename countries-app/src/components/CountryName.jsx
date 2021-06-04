import React,{useContext} from 'react'
import "./CountryName.css"
import {ThemeContext} from "../context/ThemeContext"
 const CountryName = ({country,onClick}) => {
     let theme=useContext(ThemeContext)
    return (
        <div style={{background:theme.background2,color:theme.foreground}} onClick={()=>{onClick(country)}} className="country-name">
           <div>{country.name.substr(0,30)}</div> 
            <img className="mini-flag" src={country.flag}/>
        </div>
    )
}
export default CountryName
