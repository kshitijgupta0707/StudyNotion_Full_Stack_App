import React from 'react'
import { Link } from 'react-router-dom'

//children jo andar value hain usko khege
const Button = ({ children, active, linkto }) => {
    return (
        <Link to={linkto} >
            <div className={` text-center text-[13px] shadow-md py-3 px-6 rounded-md font-bold ${active ? "bg-yellow-50 text-black": "bg-richblack-800"} 
            hover:scale-95 transition-all duration-200 ` } >
                {children}
            </div>
        </Link>
    )
}

export default Button