import React from 'react'
import { services } from '../constants'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
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

const FeaturesService = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionImg} flex-row`}>
        {services.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))} 
      </div>
    </section>
  )
}

export default FeaturesService
