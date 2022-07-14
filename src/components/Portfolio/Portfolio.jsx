import React from 'react'
import 'swiper/css'

import resort from '../../img/resort.png'
import menu from '../../img/menu.png'
import movie from '../../img/movie.png'
import tenzies from '../../img/tenzies.png'
import bud from '../../img/bud.png'

import { Swiper, SwiperSlide } from 'swiper/react'

const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={resort} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={menu} alt='' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={movie} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tenzies} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bud} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
