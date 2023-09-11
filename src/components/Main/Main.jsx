import React from 'react'
import './Main.css'
import Product from '../Product/Product'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const Main = () => {
  return (
    <div className="wrapper-main">
      <main className="main">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          navigation
        >

          <SwiperSlide>
            <Product
              img='./2.png'
              alt="Product"
              name="Black Futbolka"
              price="399"
              desc="Отличная футболка с крутым дизайном"
              bigText1="Black"
              bigText2="Black"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Product
              img='./1.png'
              alt="Product"
              name="White Futbolka"
              price="299"
              desc="Отличная футболка с крутым дизайном"
              bigText1="White"
              bigText2="White"
            />
          </SwiperSlide>

        </Swiper>
      </main>
    </div>
  )
}

export default Main