import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  CTA, 
  Footer, 
  Hero, 
  Navbar,
  TechnologyAbout,
  TechnologyDescr
} from './components'
import styles from './style'

const Technology = () => {
  return (
    <div id='clients' className='bg-[#F2FEF8] w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.flexCenter}`} style={{marginLeft: '50px', marginRight:'50px'}}>
        <div className={`${styles.boxWidth}`}>
          <CardDeal/>      
        </div>
      </div>
      <div className={`bg-[#F2FEF8] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <TechnologyDescr/>
          <TechnologyAbout/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default Technology;