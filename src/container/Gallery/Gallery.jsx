import React, { useRef } from 'react'

import {BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css'

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {

    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    }  else {
      current.scrollLeft +=  300;
    }
  }

  return (
    <div className='app__gallert flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: "#AAAAAA", marginTop:'2rem' }}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Volutpat mattis ipsum turpis elit elit scelerisque 
           egestas mu.
        </p>
        <button type='button' className='custom__button'> View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {[images.gallery01,images.gallery02,images.gallery03,images.gallery04].map((images,index) =>
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src='image' alt='gallery_image' />
            <BsInstagram className="gallery__image-icons" />
            </div>
          )}
        </div>
        <div className='app__gallery-image_arrows'>
          <BsArrowLeftShort className="gallery___arrow-icon" onclick={() => scroll('left')} />
          <BsArrowRightShort className="gallery___arrow-icon" onclick={() => scroll('left')} />
        </div>

      </div>

    </div>
  )
}

export default Gallery