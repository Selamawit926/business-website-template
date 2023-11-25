import styles from '../style'
import { discount, robot,home, logoHome, intro, first2, homeCircle } from '../assets'
import GetStarted from './GetStarted'

const AboutIntro = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-[#799185] rounded-[10px] mb-2'>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#537F64] ss:leading-[100.8px] leading-[75px]'>
          Welcome to <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Albenee Energy</span> {" "}
          </h1>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-[#537F64] ss:leading-[100px] leading-[75px] w-full'>
            Solutions
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We are committed to creating a brighter, greener future through sustainable practices.
        Our team of experts is dedicated to providing the best solutions for your business. 
        Let us help you make the switch to renewable energy and sustainable agriculture today.  
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} style={{ marginRight: '30px', marginBottom:'20px' }}>
        <img
          src={homeCircle}
          alt='logo'
          className='w-[100%] h-[90%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
    </section>
  )
}

export default AboutIntro
