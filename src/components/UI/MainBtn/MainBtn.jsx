import React from 'react'
import cl from './MainBtn.module.css'

const MainBtn = ({ text, link }) => {
  return (
    <a href={link}>
      <button className={cl.btn}>
        {text}
      </button>
    </a>
  )
}

export default MainBtn