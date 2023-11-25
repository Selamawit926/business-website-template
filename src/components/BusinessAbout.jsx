import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'


const BusinessAbout = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo2}>
        <h2 className={styles.heading22}>Our Company</h2>
        <p className={`${styles.paragraph} max-w-[970px] mt-5`}>
        Ablenee Energy Solutions is a startup dedicated to creating sustainable solutions for agriculture and energy in Ethiopia. Our team is made up of experts in the fields of agriculture, engineering, and sustainability. Together, we are working to revolutionize the way we approach these industries, with a focus on innovation, sustainability, and social responsibility.
        <br /><br />
        Our core mission is to tackle the pressing fertilizer shortage that has plagued our nation's farmers. 
        We've set out to revolutionize agriculture by harnessing the power of renewable energy sources to produce green ammonia, 
        a vital component of sustainable farming practices.
        <br /><br />
        At Ablenee Energy Solutions, we are pioneers in the quest for a more sustainable future. Founded with the vision of transforming agriculture and renewable energy in Ethiopia, we are at the forefront of innovative solutions.
        <br /><br />
        What sets us apart is our unwavering commitment to environmental stewardship. Our production processes are designed to minimize carbon emissions, reducing the carbon footprint of agriculture.

        We don't just stop at providing eco-friendly fertilizers. Our product range extends to liquid ammonia for agricultural applications and backup/off-grid power solutions, offering comprehensive support for sustainable living.
        <br /><br />
        Join us on our journey towards a greener, more self-sustaining Ethiopia. Together, we can cultivate a brighter future for all.
        </p>
      </div>
    </section>
  )
}

export default BusinessAbout
