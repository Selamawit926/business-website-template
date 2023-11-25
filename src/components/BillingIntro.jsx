import React from 'react'
import { apple, bill, google, first2, intro23 } from '../assets'
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


const BillingIntro = () => {
  const isMobile = window.innerWidth <= 500;
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionInfo}  style={{marginLeft: "50px"}}>
        <h2 className={styles.heading2}>  Sustainable Agriculture <br className='sm:block hidden'/> and Renewable Energy</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our focus on producing green ammonia addresses the fertilizer shortage and helps create a brighter, greener future. 
        We offer a range of innovative products and services to support sustainable agriculture and renewable energy
        </p>
      </div>  
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} style={{marginRight: '30px', marginTop: isMobile ? '200px' : '0' }}>
        <img
          src={intro23}
          alt='logo'
          className='w-[80%] h-[90%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
    </section>
  )
}

export default BillingIntro
