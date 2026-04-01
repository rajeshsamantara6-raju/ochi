import { motion } from 'motion/react'
import React, { useState } from 'react'

const FeaturedProjects = () => {
    const [isHovering,setHovering] = useState(false)
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[2px] pb-20 border-[#B2B2B2]'>
            <h1 className='text-5xl font-["font2"]'>Featured projects</h1>
           
        </div>
         <div className='px-20'>
            <div className='cards w-full flex gap-4 mt-10'>
                
                <div 
                onMouseEnter={()=>setHovering(true)}
                onMouseLeave={()=>setHovering(false)}
                className='cardconatiner relative w-1/2 h-[80vh]'>
                <h1 className='absolute z-[9] overflow-hidden left-full flex  text-[#CDEA68] text-9xl -translate-x-1/2 top-1/2 -translate-y-1/2 font-["font1"] '>
                {"FYDE".split("").map((item,index)=><motion.span 
                initial={{y:"100%"}}
                animate={isHovering ? {y:"0"}: {y:"100%"}}
                transition={{ease: [0.22, 1, 0.36,1],delay:index * .06}}
                className='inline-block'>{item}</motion.span>)}
                </h1>
                    <div className='card w-full h-full rounded-[10px] overflow-hidden bg-green-600'>
                        <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                </div>
                <div className='cardconatiner relative w-1/2 h-[80vh] '>    
                    <div className='card w-full h-full overflow-hidden rounded-[10px] bg-green-600'>
                        <h1 className='absolute z-[9] right-full text-[#CDEA68] text-9xl translate-x-1/2 top-1/2 -translate-y-1/2 font-["font1"] '>
                        {"VISE".split("").map((item,index)=><span>{item}</span>)}
                        </h1>

                        <div className='card w-full h-full rounded-[10px] overflow-hidden bg-green-600'>
                            <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default FeaturedProjects