import React from 'react'
import { services } from '../constants'
import styles from '../style'

const ClientsService = () => {
  return (
    <section className={`${styles.flexCenter} my-4 mt-55`} style={{marginTop: "80px"}}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {services.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={client.icon}
              alt='client'
              className='sm:w-[100px] w-[100px] object-contain'
            />           
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientsService
