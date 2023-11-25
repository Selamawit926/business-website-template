import React from 'react'
import styles, { layout } from '../style'


const BillingAbout = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo2}>
        <p className={`${styles.paragraph} max-w-[970px] mt-5`}>
        At Ablenee Energy Solutions, we are committed to pioneering sustainable agriculture and renewable energy in Ethiopia. Our focus on producing green ammonia addresses the fertilizer shortage and helps create a brighter, greener future. 
        We offer a range of innovative products and services to support sustainable agriculture and renewable energy.
        </p>
      </div>
    </section>
  )
}

export default BillingAbout
