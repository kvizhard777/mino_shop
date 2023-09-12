import React, { useEffect, useState } from 'react'
import './Main.css'
import Product from '../Product/Product'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Main = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://650028e118c34dee0cd467bc.mockapi.io/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="main">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation
      >

        {
          isLoading
            ? (<span className='loading'>Загрузка...</span>)
            : (
                products.map((product) => (
                  <SwiperSlide>
                    <Product
                      key={product.id}
                      img={product.img}
                      alt="Product"
                      name={product.name}
                      price={product.price}
                      desc={product.desc}
                      bigText1={product.bigText1}
                      bigText2={product.bigText2}
                    />
                  </SwiperSlide>
                ))
              )
        }

      </Swiper>
    </main>
  )
}

export default Main