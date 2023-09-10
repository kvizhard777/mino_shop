import React from 'react'
import './Product.css'
import MainBtn from '../UI/MainBtn/MainBtn'

const Product = ({ img, alt, price, desc, name, bigText1, bigText2 }) => {
  return (
    <section className="product">
      <div className="container">

        <div className="product-wrapper">

          <div className="product-img">
            <div className="product-img__txt">{bigText1}</div>
            <img src={img} alt={alt} />
            <div className="product-img__text">{bigText2}</div>
          </div>

          <div className="product-info">
            <div className="product-info__wrapper">
              <span className="product-name">{name}</span>
              <span className="product-price">${price}</span>
              <p className="product-desc">{desc}</p>
            </div>

            <MainBtn text="Заказать" link="#" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Product