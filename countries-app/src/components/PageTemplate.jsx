import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import "./PageTemplate.css"
 const PageTemplate = (props) => {
    return (
        <div className="page-template">
            
<Menu/>
{/* <div className="children"> */}
{props.children}
{/* </div> */}
            
            <Footer/>
        </div>
    )
}
export default PageTemplate
