import React from 'react'
import { card, green, home, logoHome, homeCircle } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section id='clients' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Pioneering <br className='sm:block hidden'/>Green Technology</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our cutting-edge green ammonia production process sets a benchmark for environmental sustainability. 
          We kickstart this revolutionary journey by harnessing renewable energy sources 
          like solar and wind power to produce green hydrogen through water electrolysis.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={homeCircle}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
