import React from 'react'
import './button.css'

const Button = ({text, txtColor}) => {
  return (
    <div>
       {/* <button style={{color: 'red'}}>{text}</button> */}
       <button style={{color: txtColor}}>{text}</button>
    </div>
  )
}

export default Button
