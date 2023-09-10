import React from 'react'
import './Header.css'
import HeaderNav from './HeaderNav'
import MainBtn from '../UI/MainBtn/MainBtn'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href='#' className="header__logo">Mino</a>
          <HeaderNav />
          <MainBtn text='Заказать' link='https://t.me/mino_autorize' />
        </div>
      </div>
    </header>
  )
}

export default Header