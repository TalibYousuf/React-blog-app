import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-purple-600 p-1 rounded shadow inline-block">
      <img src={logo} alt="Logo" className="h-8 w-auto rounded-full object-contain" />
    </div>
  )
}

export default Logo
