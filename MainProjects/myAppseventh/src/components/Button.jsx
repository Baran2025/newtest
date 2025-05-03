
import React from 'react'

const Button = ({ btnTxT, onclickTrigger }) => <button onClick={onclickTrigger} style={{cursor: 'pointer'}}>{btnTxT}</button>

export default Button