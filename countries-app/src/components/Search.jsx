import React,{useState,useContext} from 'react'
import "./Search.css"
import {ThemeContext} from "../context/ThemeContext"
 const Search = ({data,onClick}) => {
    let theme=useContext(ThemeContext)
    //  console.log(data);
     const [search, setSearch] = useState("")
    //  console.log(search);
    const filterDatas = data.filter(country => country.name.toLocaleLowerCase().includes(search))
console.log(filterDatas);
    return (
        <div className='search-container'>
            <input style={{background:theme.background,color:theme.foreground}} className='search'  value={search} placeholder='Search Country...' onChange={(e)=>setSearch(e.target.value)}  />
            {/* <div className="parent-search"> */}
            {search && filterDatas.map((country,index)=>(
                 <div key={index} style={{background:theme.background2,color:theme.foreground}} className="search-country" onClick={()=>{onClick(country)}}>
                     <img className="mini-flag" src={country.flag}/>
                 <div>{country.name.substr(0,30)}</div> 
                  
              </div>
                // <div className="search-country" key={index}>{item.name}</div>
            )
            )}
            {/* </div> */}
        {/* <input 
            type="text" 
            value={search}
            className='search' 
            placeholder='Type Here...' 
            onChange={(e) => onSearch(e.target.value)}
        /> */}
    </div>
    )
}
export default Search
