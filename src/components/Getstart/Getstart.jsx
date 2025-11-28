import React from 'react'
import './Getstart.css'
const Getstart = () => {
  return <>
    <section className='getstart-wrapper' id='getstart'>
        <div className='getstart-container paddings innerWidth'>
             <div className='contact-head flexColStart' style={{paddingInline:"25px"}} data-aos="fade-up">
                <span className='orangeText'>Heyy Let's</span>
                <span className='primaryText'>Get Start Together</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. We</span>
                <span className='secondaryText'>beleive a good blace to live can make your life better</span>
            </div>
            <div className='Getstart-main-content paddings'>
                <span className='Getstart-title'data-aos="fade-down">Get started with Homyz</span>
                <p className='secondText' data-aos="fade-down">Unleash your potential and ignite the journey that changes everything.</p>
                <button className='getstart-button' data-aos="fade-down">Get Started</button>
            </div>
        </div>
    </section>
  </>
}

export default Getstart;