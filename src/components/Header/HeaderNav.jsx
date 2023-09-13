import React from 'react'
import { Icon } from '@iconify/react'

const HeaderNav = () => {
  return (
    <nav className="nav">
      <a href="https://t.me/mino_autorize" target='_blank' className="nav__item">
        <Icon icon="ic:baseline-telegram" />
      </a>

      <a href="https://www.instagram.com/made.innorthossetia/" target='_blank' className="nav__item">
        <Icon icon="ri:instagram-fill" />
      </a>
    </nav>
  )
}

export default HeaderNav