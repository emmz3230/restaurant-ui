import React, { useState,useRef } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo ] = useState(false);
  const vidRef = useRef();

  return (
    <div className='app__video'>
      <video 
      ref={vidRef}
      src={meal}
      type="video/mp4"
      loop
      controls={false}
      mutedd
      />
      <div className='app__video-overlay flex-center'>
        <div 
        className='app__video-overlay_circle flex__circle'
        onClick={() => {
          setPlayVideo(!playVideo);
          playVideo ? vidRef.current.pause() : vidRef.current.play()
        }}
        >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ): (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}

        </div>
      </div>

    </div>
  )
}

export default Intro