import React from 'react'
import { apple, bill, google } from '../assets'
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
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      {/* <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div> */}
      <div className={layout.sectionInfo}  style={{marginLeft: "150px"}}>
        <h2 className={styles.heading2}>  Sustainable Agriculture <br className='sm:block hidden'/> and Renewable Energy</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our focus on producing green ammonia addresses the fertilizer shortage and helps create a brighter, greener future. 
        We offer a range of innovative products and services to support sustainable agriculture and renewable energy
        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div> */}
      </div>  
    </section>
  )
}

export default Billing
