import { motion } from 'motion/react'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const LandingPage = () => {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-35 px-13'>
        {["We create","eye-opening","presentations"].map((ele,index)=>{
            return(
                <div key={index} className='masker font-["font1"] flex '>
                {index === 1 && (
                    <motion.div 
                    initial={{width:0}}
                    animate={{width:"9vw"}}
                    transition={{ease: [0.76,0,0.24,1],duration:1}}
                    
                    className='w-[9vw] h-[6vw] mt-4 mr-2'>
                    <img className='object-cover w-full h-full rounded-[10px]' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                    </motion.div>)}
                <h1 className='uppercase text-[9vw] leading-[7vw]'>{ele}
                </h1>
            </div>
            )
        })}
        </div>
        <div className='border-t-[1px] border-[#bbbbbb] mt-25 flex items-center justify-evenly'>
        {["Presentation and storytelling agency","For innovation teams and global brands"].map((ele,index)=>{
            return(
                <p className='font-["font2"]  py-4' key={index}>{ele}</p>
            )
        })}
        <div className='start flex items-center justify-center gap-2 mt-3'>
            <div className='px-6 py-2 border uppercase rounded-full border-black'>
                start the project
            </div>
            <div className='w-10 h-10 border rounded-full flex items-center justify-center text-2xl'>
                <MdArrowOutward />
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage