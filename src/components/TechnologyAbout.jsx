import React from 'react'
import { apple, bill, google, homeCircle } from '../assets'
import styles, { layout } from '../style'
import { features,services } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-[#537F64] text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-[#537F64] text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const TechnologyAbout = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img
          src={homeCircle}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
        
      <div className={layout.sectionInfo} style={{marginLeft:'150px'}}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        When these two eco-friendly elements, green hydrogen and nitrogen, are thoughtfully combined in our high-pressure Haber-Bosch reaction chamber, we create carbon-neutral ammonia. This sustainable approach not only addresses critical agricultural and industrial needs but also takes strides towards a cleaner, greener planet.
        <br /><br />
        With Ablenee's commitment to green, carbon-neutral processes, we're pioneering a more sustainable future for agriculture, industry, and the environment as a whole.
        </p>
      </div>  
     
    </section>
  )
}

export default TechnologyAbout
