import React from 'react';

function Input({ placeholder, Icon, inputType }) {
  return (
    <div className='flex items-center justify-start border p-4 rounded-lg mb-4 w-full'>
        { Icon && <Icon /> }
        <input
            placeholder={placeholder}
            type={inputType}
            className="ml-2 outline-none"
        />
    </div>
  )
}

export default Input;