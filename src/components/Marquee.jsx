
import { motion } from 'motion/react'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-t-[20px] bg-[#004D43] text-white '>
      <div className='text border-t-2 border-b-2 border-[#306F66] flex whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat: Infinity,ease:'linear',duration:10}} className='text-[18vw] font-["font2"] leading-none pt-3 pb-3 uppercase font-extrabold pr-20'>We are ochi</motion.h1>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat: Infinity,ease:'linear',duration:10}} className='text-[18vw] font-["font2"] leading-none pt-3 pb-3 uppercase font-extrabold pr-20'>We are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee