import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { guess } from '../redux-toolkit/slice'

let preNumber

const Main = () => {

  const astrict = ({ target }) => { if (target.value.length > 2) target.value=target.value.slice(0,2)}

  const { highScore, number, success, score } = useSelector(state => state.guess)

  const dispatch = useDispatch()

  const inputRef = useRef()

  const judge = () =>{
    let value = inputRef.current.value
    if (value > number) {
      return 'Too high!'
    } else {
      return 'Too low!'
    }
  }

  const checkClick = () => {
    let value = inputRef.current.value
    if (success) return
    if (score <= 0) return
    if (value === null) return 
    if (preNumber === value) return
    dispatch(guess({ number: value }))
    preNumber = value
  }

  return (
    <main className='mt-[15rem] md:mt-[20rem] grid grid-cols-5 md:grid-cols-2 md:gap-[1rem]'>
      <div className='flex flex-col items-center justify-center col-span-2 md:col-span-1'>
        <input type="number" className='pl-[3rem] pr-[1rem] w-[12rem] h-[7rem] md:w-[15rem] md:h-[8rem] bg-transparent  border-[2px] border-white text-3xl md:text-6xl outline-none text-white' onInput={astrict} ref={inputRef}>
        </input>
        <div onClick={checkClick} className='px-[1.7rem] py-[1.1rem] md:px-[2rem] md:py-[1.2rem] bg-white text-black cursor-pointer mt-10 text-xl md:text-2xl select-none hover:scale-110 transition-all duration-300 active:translate-y-[0.3rem]'>
          Check!
        </div>
      </div>
      <div className='flex flex-col text-sm md:text-2xl col-span-3 md:col-span-1 items-center'>
        <div className='flex flex-col justify-between h-full'>
          <p className='mb-2'>{
            score <= 0 ?
            'You lose' :
            success === null ?
            'Start guessing...' :
            success === false ?
            judge() :
            '🎉 Correct number'
          }</p>
          <div>
            <p className='mb-8'>✌️ Score: {score}</p>
            <p>🏆 Highscore: {highScore}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
