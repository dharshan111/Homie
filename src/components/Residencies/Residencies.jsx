import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../..//Utils/Slider.json'
import { SliderSettings } from '../../Utils/Common'

const Residencies = () => {
  return (
    <section className='resi-wrapper' id='residences'>
        <div className='paddings innerWidth resi-container'>
            <div className='resi-head flexColStart paddings'data-aos="fade-down">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...SliderSettings}>
                <SliderButtons />
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i} data-aos="fade-up">
                            <div className='flexColStart resi-card'>
                                <img src={card.image} alt="home" />

                                <span className='SecondaryText resi-price'>
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>      
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies


const SliderButtons = () => {
    const swiper = useSwiper();
    return <>
        <div className='resi-button'>
       
            <button onClick={() => swiper.slidePrev()} id='btns-swiper'>&lt;</button>
       
            <button onClick={() => swiper.slideNext()} id='btns-swiper-2'>&gt;</button>

        </div>
    </>
}