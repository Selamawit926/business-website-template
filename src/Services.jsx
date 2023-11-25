import React from 'react'
import { 
  Billing, 
  BillingAbout, 
  BillingIntro, 
  Business, 
  CardDeal, 
  ClientsService, 
  CTA, 
  FeaturesService, 
  Footer, 
  Hero, 
  Navbar
} from './components'
import styles from './style'

const Services = () => {
  return (
    <div id='product' className='bg-white w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <BillingIntro/>      
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <BillingAbout/>
          <ClientsService/>
          <FeaturesService/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default Services;