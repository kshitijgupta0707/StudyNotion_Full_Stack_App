import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from './HighlightText'
import  './temp.css'
import Button from './Button'

import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({ position, heading, subHeading, ctaButton1, ctaButton2, backgroundGradient, codeColor , codeBlock }) => {

    return (
        <div className={`  flex ${position} my-20 justify-between gap-10`} >


            {/* section1 */}

            <div className='w-[50%] flex flex-col gap-8' >

                {heading}
                <div className='text-richblack-300 font-bold ' >
                    {subHeading}
                </div>

                <div className=' flex gap-7 mt-7'  >
                    <Button active={ctaButton1.active} linkto={ctaButton1.linkto}  >
                        <div className='flex gap-2 items-center' >
                            {ctaButton1.btnText}
                            <FaArrowRight />
                        </div>

                    </Button>
                    <Button active={ctaButton2.active} linkto={ctaButton2.linkto}  >
                       
                            {ctaButton2.btnText}
                            
                       

                    </Button>
                   
                </div>




            </div>

            {/* section 2 */}
         <div className=' h-fit flex flex-row text-[10px] w-[100%] p-2 lg:w-[500px] relative ' >
                <div
                 style={{ 'filter': "blur(80px)" }}
                 className='w-1/2 h-[100px] bg-[#ef542d] absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 rounded' >

            </div>
                <div className=' text-center flex flex-col w-[10%] text-richblack-400  font-inter font-bold' >
                    {/* hw: piche yellow gradient lagana hain */}
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 z-10 `} >
                    <TypeAnimation
                        sequence={[codeBlock, 10000000, ""]}
                        speed={"99"}
                        repeat={true}
                        omitDeletionAnimation={true}
                        style={{
                            whiteSpace: "pre-line",
                            // display: "block"
                        }}
                        preRenderFirstString={false}
                    />
                </div>
         </div>

        </div>
    )
}

export default CodeBlocks