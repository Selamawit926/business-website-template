import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-[#CDE0D7] font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get in Touch
    </button>
  )
}

export default Button
