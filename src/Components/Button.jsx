import React from 'react'

function Button({
    children,
    type='button',
    bgColor="bg-purple-500",
    textColor='text-white',
    className="hover:bg-purple-600 transition-colors duration-200 mr-2",
    ...props

}) { //changes made here
  return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button
