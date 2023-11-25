import React from 'react'
import styles, { layout } from '../style'


const TechnologyDescr = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo2}>
        <p className={`${styles.paragraph} max-w-[970px] mt-5`}>
        At Ablenee Energy Solutions, our cutting-edge green ammonia production process sets a benchmark for environmental sustainability. We kickstart this revolutionary journey by harnessing renewable energy sources like solar and wind power to produce green hydrogen through water electrolysis. This method is not just efficient; it's also carbon-neutral, leaving a minimal environmental footprint.
        <br /><br />
        We take environmental responsibility a step further by employing a state-of-the-art Pressure Swing Adsorption (PSA) system to separate nitrogen from the air, avoiding harmful emissions. 
        <br /><br />
        </p>
      </div>
    </section>
  )
}

export default TechnologyDescr
