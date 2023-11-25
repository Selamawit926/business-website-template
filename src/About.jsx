import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  CTA, 
  Footer, 
  Hero, 
  Navbar,
  AboutIntro,
  BusinessAbout,
  Clients,
  Features
} from './components'
import { features } from "./constants"
import styles from './style'

const About = () => {
  return (
    <div id='features' className='bg-[#F2FEF8] w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutIntro/>      
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <BusinessAbout/>
          <Clients/>
          <Features/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default About;