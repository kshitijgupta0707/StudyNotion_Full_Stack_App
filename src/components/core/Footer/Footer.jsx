import React from 'react'
import { FooterLink2 } from '../../../data/footer-links'


import { Link } from 'react-router-dom';
import './Footer.css'
//ICONS
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from '../../../assets/Logo/darkLogo.png'

const Resources = [
    "Articles",
    "Blog",
    "Chart Sheet",
    "Code challenges",
    "Docs",
    "Projects",
    "Videos",
    "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Community = ["Forums", "Chapters", "Events"];
const Company = ["About", "Careers", "Affiliates"];
const Footer = () => {
    return (

        <footer className='flex justify-between  bg-richblack-800 text-richblack-400  p-[5%]' >

            <div className='flex w-[40%] gap-10     '  >


                <ul className=' flex flex-col gap-2 list-none'  >
                    <li> <img className=' w-[150px]' src={Logo} alt="" /> </li>

                    <h2 className=' font-semibold text-richblack-50' >Company</h2>
                    {
                    Company.map((ele, i) => {
                        return (
                            <li
                                key={i}
                                className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                                <Link to={ele.toLowerCase()}>{ele}</Link>
                            </li>
                        );
                    })}

                    <div className="flex gap-3 text-lg">
                        <FaFacebook />
                        <FaGoogle />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </ul>

                <ul className='list-none' >
                    <li className=' font-semibold text-richblack-50'  >Resources</li>
                    {Resources.map((ele, index) => {
                        return (
                            <li
                                key={index}
                                className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                                <Link to={ele.split(" ").join("-").toLowerCase()}>
                                    {ele}
                                </Link>
                            </li>
                        );
                    })}

                    <li className="text-richblack-50 font-semibold text-[16px] mt-7">
                        Support
                    </li>
                    <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                        <Link to={"/help-center"}>Help Center</Link>
                    </div>
                </ul>

               

                <ul className="flex flex-col gap-2 mt-2">
                    <li className=' font-semibold text-richblack-50' >Plans</li>
                    {Plans.map((ele, index) => {
                        return (
                            <li
                                key={index}
                                className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                                <Link to={ele.split(" ").join("-").toLowerCase()}>
                                    {ele}
                                </Link>
                            </li>
                        );
                    })}
                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                    Community
                </h1>
                    {Community.map((ele, index) => {
                        return (
                            <li
                                key={index}
                                className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                            >
                                <Link to={ele.split(" ").join("-").toLowerCase()}>
                                    {ele}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </div >
            <div className=' border-center' ></div>

            <div className='flex w-[40%] gap-10  ' >
                {
                    FooterLink2.map((element, index) => {
                        return <div>

                            <div className='  font-semibold mb-1 text-richblue-50'  > {element.title} </div>
                            {
                                element.links.map((link) => {
                                    return <div key={index}  className='text-[14px]' >
                                        <Link to={link.link} >
                                        {link.title}
                                        </Link>
                                    </div>
                                })
                            }


                        </div>

                    })
                }

            </div>
        </footer>
    )
}

export default Footer