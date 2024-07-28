import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
// import logo from '../../../assets/Images/Logo-Full-Light.png'
import logo from '../../../assets/Logo/darkLogo.png'
const Header = () => {
    return (
        <header className=' flex  justify-between w-full max-w-[1000px] text-white  m-auto p-2 items-center' >
            <img className=' w-[17%]'  src={logo} alt="" />

            <ul className=' flex list-none gap-4 ' >
                <Link to={"/catelog"}  >
                    <li>Catelog</li>
                </Link>
                <Link to={"/about-us"}  >
                    <li>AboutUs</li>
                </Link>
                <Link to={"/home"}  >
                    <li> Home </li>
                </Link>
                <Link to={"/contact-us"} >
                    <li> Contact us </li>
                </Link>
            </ul>
            <div className='flex gap-3 text-2xl ' >
                <IoSearch />
                <TfiShoppingCart />
                <CgProfile />
            </div>

        </header>
    )
}

export default Header