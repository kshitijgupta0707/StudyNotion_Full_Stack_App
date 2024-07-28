import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from '../../components/core/Home/HighlightText';
import CTAButton from '../../components/core/Home/Button';
import Banner from "../../assets/Images/banner.mp4"
import CodeBlocks from '../../components/core/Home/CodeBlocks';
import TimelineSection from '../../components/core/Home/TimelineSection.jsx'
import LearningLanguageSection from '../../components/core/Home/LearningLanguageSection.jsx'
import { Header, Footer } from '../../components/index.js';
import InstructorSection from '../../components/core/Home/InstructorSection.jsx';
import ExploreMore from '../../components/core/Home/ExploreMore.jsx';
const Home = () => {
  return (
    <>
      <Header />
      <div className=' relative mx-auto flex flex-col w-11/12 items-center text-white justify-between  max-w-[950px] ' >

        <Link to={"/signup"} >
          <div className=' flex items-center py-2 px-5 gap-2 bg-richblack-800 text-richblack-200 rounded-full my-10' >
            Become a Instructor <FaArrowRight />
          </div>
        </Link>

        <div className=' text-4xl font-semibold text-center' >
          Empower your future growth with <HighlightText text={"Coding skills"} />
        </div>

        {/* i need the content in 2 lines */}
        <div className=' w-[90%] text-lg text-richblack-300  text-center my-6  max-w-[85%]' >
          With our online coding courses, you can learn at your own pace, from anywhere in the world,
          and get access to a wealth of resources, including hands-on projects, quizzes,
          and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-7 mt-8' >
          <CTAButton active >
            Learn more
          </CTAButton>
          <CTAButton>
            Book a demo
          </CTAButton>
        </div>


        <div className=' shadow-white shadow-[20px_20px_0_0]  w-[80%] mx-3 my-12 relative z-10  ' >
          <video muted loop autoPlay src={Banner}  >
          </video>
          {/* <div
            style={{ 'filter': "blur(120px)" }}
            className='w-1/2 h-[100px] bg-[#2dbfef]  absolute -z-10 inset-y-1/2  -translate-x-1/2 -translate-y-1/2 rounded' >

          </div>
          <div
            style={{ 'filter': "blur(120px)" }}
            className='w-1/2 h-[100px] bg-[#2dbfef]  absolute -z-10 inset-x-1/2  -translate-x-1/2 -translate-y-1/2 rounded' >

          </div> */}
          {/* <div
            style={{ 'filter': "blur(120px)" }}
            className='w-1/2 h-[100px] bg-[#2dbfef]  absolute -z-10   -translate-x-1/2 -translate-y-1/2 rounded' >

          </div> */}
          <div
            style={{ 'filter': "blur(120px)" }}
            className='w-[50%] h-[100px] bg-[#2dbfef]  absolute -z-10  -translate-x-1/2 -translate-y-1/2 rounded  inset-y-0' >

          </div>
          <div
            style={{ 'filter': "blur(120px)" }}
            className='w-[50%] h-[100px] bg-[#2dbfef]  absolute -z-10  -translate-x-1/2 -translate-y-1/2 rounded  ' >

          </div>
          <div
            style={{ 'filter': "blur(120px)" }}
            className='w-[50%] h-[100px] bg-[#2dbfef]  absolute -z-10 inset-y-1/2  -translate-x-1/2 -translate-y-1/2 rounded  ' >

          </div>
          {/* <div
            style={{ 'filter': "blur(120px)" }}
            className='w-1/2 h-[100px] bg-[#2dbfef]  absolute -z-10 inset-x-full  inset-y-1/2  -translate-x-1/2 -translate-y-1/2 rounded' >

          </div> */}
        </div>
        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div>
                Unlock your <HighlightText text={"Coding Potential"} /> with our online courses
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctaButton1={
              {
                active: true,
                btnText: "Try it Yourself ",
                linkto: "/signup"
              }
            }
            ctaButton2={
              {
                active: false,
                btnText: "Learn More",
                linkto: "/login"
              }}
            codeBlock={
              `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Blocks</title>
</head>
<body>
<h2> <HighlightText text='Created by Kshitij' /></h2>
</body>
</html>`
            }
            codeColor={"text-yellow-25"}
          />
          <CodeBlocks
            position={"flex-row-reverse"}
            heading={
              <div>
                Start  <HighlightText text={"Coding in seconds"} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctaButton1={
              {
                active: true,
                btnText: "Continue Lesson",
                linkto: "/signup"
              }
            }
            ctaButton2={
              {
                active: false,
                btnText: "Learn More",
                linkto: "/login"
              }}
            codeBlock={
              `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Blocks</title>
</head>
<body>
<h2> Created by Kshitij</h2>
</body>
</html>`
            }
            codeColor={"text-yellow-25"}
          />
        </div>
        
        <ExploreMore />
      </div>


      {/* section 2 */}
      <section className=' bg-pure-greys-5 text-richblack-700' >


        <div className='homepage_bg h-[320px] flex  ' >

          <main className=' w-11/12 max-w-[950px] flex justify-center m-auto  gap-7 ' >
            <div className="hidden lg:block lg:h-[500px]">
              {/* so to keep half blue and half white bg */}
            </div>
            <div className='flex items-center gap-7'>
              <CTAButton active linkto={'/signup['} >
                <div className='flex items-center gap-3'  >
                  Explore more<FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton linkto={'/signup'}  >
                <div className='text-white' >Learn More</div>
              </CTAButton>
            </div>


          </main>

        </div>
        <div className=' w-11/12 max-w-[950px] m-auto flex flex-col items-center justify-between '>

          <div className='flex flex-row gap-5 mb-10 mt-[40px] justify-between'>
            <div className='text-4xl font-semibold w-[45%]'>
              Get the Skills you need for a
              <HighlightText text={"  Job that is in demand"} />
            </div>

            <div className='flex flex-col gap-10 w-[40%] items-start'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>
            </div>

          </div>



          <TimelineSection />/

          <LearningLanguageSection />
        
        </div>


      </section>

        {/*Section 3 */}
      <section className='w-11/12 max-w-[950px] mx-auto flex-col items-center  gap-8 first-letter bg-richblack-900 text-white' >

        

          <InstructorSection />

          <h2 className='text-center text-4xl font-semobold mt-10'>review from Other Learners</h2>
          {/* Review Slider here */}

        
     </section>






      <hr className='h-[0.3px] text-richblack-50' />
      <Footer />

    </>
  )
}

export default Home
