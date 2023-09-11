import React from 'react'
import cl from './MainBtn.module.css'

const MainBtn = ({ text, link }) => {
  return (
    <a href={link} target='_blank'>
      <button className={cl.btn}>
        {text}
      </button>
    </a>
  )
}

export default MainBtn