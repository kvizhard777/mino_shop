import React from 'react'
import './Product.css'
import MainBtn from '../UI/MainBtn/MainBtn'

const Product = ({ img, alt, price, desc, name }) => {
  return (
    <section className="product">
      <div className="container">

        <div className="product-wrapper">

          <div className="product-img">
            <img src={img} alt={alt} />
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