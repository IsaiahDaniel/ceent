import React from 'react'

function Button({ buttonType, buttonText }) {
  return (
    <button type={buttonType} className="p-3 bg-[#DF371E] text-white rounded-lg w-full hover:bg-slate-400">{buttonText}</button>
  )
}

export default Button;