import React from 'react'
import './Hero.css'
import CountUp from "react-countup"
import { FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return <>
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container">

            <div className='flexColStart hero-left paddings' data-aos="fade-right">
                <div className=" hero-title">
                    <div className='circle'></div>
                    <h1>
                        Discover <br />
                        Most Suitable <br />Property
                    </h1>
                </div>
                <div className="flexColStart hero-discription">
                    <span className='secondaryText'>Find a variety of properties that suit you very easilty </span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you Search</span>
                </div>
                <div className="flexCenter search-bar">
                    <span><FaLocationArrow size={24} color='blue'/></span>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>
                <div className="flexCenter states">
                    <div className='flexColCenter stat'>
                        <span className='Count-up'>
                            <CountUp Start={8000} end={9000} duration={4}/>
                            <span className='orangeText'>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span className='Count-up'>
                            <CountUp Start={1950} end={2000} duration={4}/>
                            <span className='orangeText'>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className='flexColCenter stat'>
                        <span className='Count-up'>
                            <CountUp end={28} duration={4}/>
                            <span className='orangeText'>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
            </div>


            {/* right-side */}
            <div className=' flexCenter hero-right' data-aos="fade-left">
                <div className='image-container'>
                    <img src="./hero-image.png" alt="heroimg" />
                </div>
            </div>

        </div>
    </section>
  </>

}

export default Hero