import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getAssets } from './utils'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {

  const { success } = useSelector(state => state.guess)

  const audioRef = useRef()

  useEffect(()=>{

    let aduio = audioRef.current
    const palyMusic = () => aduio.play()
    aduio.volume = 0.3
    document.body.addEventListener('click', palyMusic)

    return () => document.body.removeEventListener('click', palyMusic)
  }, [])

  return (
    <div className={`h-full w-full ${success === null ? 'bg-[#222]' : success === false ? 'bg-red-600' : 'bg-green-600'}`}>
      <div className='max-w-[1200px] py-2 mx-auto'>
        <Header />
        <Main />
      </div>
      <audio src={getAssets('bg.mp3')} loop ref={audioRef}></audio>
    </div>

  )
}

export default App
