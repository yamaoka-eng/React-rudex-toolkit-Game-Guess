import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { agin } from '../redux-toolkit/slice'

const Header = () => {

  const { success, number } = useSelector(state => state.guess)
  const dispatch = useDispatch()

  return (
    <header className='flex flex-col'>
      <div className='flex justify-between px-4 md:px-8 pt-4'>
        <div className='bg-white text-black px-6 select-none py-3 text-xl md:text-2xl cursor-pointer hover:scale-110 transition-all duration-300 active:translate-y-[0.3rem]' onClick={()=>dispatch(agin())}>Again!</div>
        <p className='text-sm md:text-base'>(Between 0 and 20)</p>
      </div>
      <p className='text-center py-[10rem] text-3xl md:text-5xl'>Guess My Number!</p>
      <div className='w-full bg-white h-[0.6rem] mt-10 relative'>
        <div className='py-[2.5rem] px-[6rem] bg-white absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] text-black text-5xl md:text-7xl flex items-center justify-center'>
          { success ? number : '?' }
        </div>
      </div>
    </header>
  )
}

export default Header
