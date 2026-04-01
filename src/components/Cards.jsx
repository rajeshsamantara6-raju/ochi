import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-5 px-20'>
        <div className='cardcontainer w-1/2 h-[60vh]'>
            <div className='card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 rounded-full px-6 py-3 border text-[#CDEA68] border-[#CDEA68]'>&copy; 2019-2026</button>
            </div>
        </div>
        <div className='cardcontainer w-2/3 h-[60vh] flex gap-5'>
            <div className='card relative w-1/2 flex items-center justify-center rounded-lg h-full bg-[#212121]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 rounded-full px-6 py-3 border text-[#ffffff] border-[#ffffff] uppercase'>rating 5.0 on clutch</button>
        </div>
        <div className='card relative flex items-center justify-center w-1/2 rounded-lg  h-full bg-[#212121]'>
                <img className='w-32'  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 rounded-full px-6 py-3 border text-[#ffffff] border-[#ffffff] uppercase'>business bootcamp alumini</button>
        </div>
        </div>
    </div>
  )
}

export default Cards