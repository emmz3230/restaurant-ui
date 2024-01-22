import React from 'react'

import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './Lausrels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle} }) => (
  <div className='app__lauresl_award-card'>
    <img src='imgUrl' alt="awards" />
    <div className='app__laurels_award-card_content'>
      <p className='p_cormorant' style={{color:'#DCCA87'}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)


const Laurels = () => (
    <div className='app__bg app__wrapper section__padding' id="awards">
      <div className='app__wrapper_info' >
        <SubHeading title="awards & regnition" />
        
        <h1 className='headtext__cormorant'>Outr Laurels</h1>
        
        <div className='app__laurels_awards' >
          {data.awards.map((award) => <AwardCard award={award} key={award.title} /> )}
        </div>
      </div>

      <div className='app_wrapper_img'>
        <img src={images.laurels} alt='laurels_img' />
      </div>

    </div>
  )


export default Laurels