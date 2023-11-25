import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#628474] rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading23}>Let's try our service now!</h2>
        <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
        Thank you for your interest in Ablenee Energy Solutions. 
        We're passionate about sustainable agriculture and renewable energy, and we'd love to hear from you. 
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
