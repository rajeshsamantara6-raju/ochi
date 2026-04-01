import React from 'react'

const About = () => {
  return (
    
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-[15px]'>
      <h1 className='font-["font2"] text-[3.9vw] leading-[4vw] tracking-tight p-20'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>


<div className='w-full h-[35vw]  border-t-[1px] border-[#89965b9b] flex items-center justify-between p-10'>
    <div className='w-[40vw] h-[26vw] '>
      <h1 className='font-["font2"]'>What you can expect:</h1>
    </div>

    <div className='text1 font-["font2"] '>
      {["We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: I want in! We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations","Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.","Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo."].map((item,index)=>{
        return(
          <h1 className='w-[18vw] pt-3 tracking-wide' key={index}>{item}</h1>
        )
      })}
    </div>

    <div className='text2  flex items-center flex-col justify-center font-["font2"]'>
      <h1>S:</h1>
        <div className='pt-1   capitalize '><a className='border-b'>linkedin</a></div>
        <div className='pt-1   capitalize'><a className='border-b'>facebook</a></div>
        <div className='pt-1   capitalize'><a className='border-b'>twitter</a></div>
        <div className='pt-1   capitalize'><a className='border-b'>whatsapp</a></div>
    </div>

    
    </div>


    <div className='w-full flex gap-5 border-t-[1px] pt-10 border-[#89965b9b]'>
        <div className='w-1/2'>
            <h1 className='text-[2vw] font-["font2"]'>How we can help:</h1>
            <button className='px-10 py-5 flex items-center gap-3 rounded-full mt-5 text-white bg-black'>Read More
              <div className='w-2 h-2 rounded-full bg-white'>

              </div>
              </button>
        </div>

        <div className='w-1/2 rounded-3xl overflow-hidden h-[70vh]'>
        <img className='w-full object-cover h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
    </div>
  
      
    </div>
    
    
    
  )
}

export default About