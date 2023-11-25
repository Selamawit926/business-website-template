import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  CTA, 
  Footer, 
  Hero, 
  Navbar
} from './components'
import styles from './style'

const Home = () => {
  return (
    <div  id='home' className='bg-[#F2FEF8] w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <Billing/>
          <CardDeal/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default Home;