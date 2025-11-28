import React from 'react'
import './Contact.css'
import { FaHome } from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Contact = () => {
  return <>
        <section className='contact-wrapper' id='contact'>
            <div className='paddings innerWidth contact-container'>
                <div className='contact-head flexColStart' style={{paddingInline:"25px"}} data-aos="fade-down">
                    <span className='orangeText'>Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the best services for you. We</span>
                    <span className='secondaryText'>beleive a good blace to live can make your life better</span>
                </div>
            </div>
            <div className='contact-logs paddings innerWidth'>
                <div className='contact-double-content paddings'>
                    <div className='contact-1 flexColStart' style={{paddingInline:"25px"}} data-aos="zoom-in">
                        <FaPhone size={24} color='blue' /><span>Mobile</span>
                        <span className='secondaryText'>0123-4567-89</span>
                        <button>Call</button>
                    </div>

                    <div className='contact-1 flexColStart' style={{paddingInline:"25px"}} data-aos="zoom-in">
                        <FaWhatsapp size={24} color="blue" /><span>Whatsapp</span>
                        <span className='secondaryText'>0123-4567-89</span>
                        <button>Chat</button>
                    </div>

                    <div className='contact-1 flexColStart' style={{paddingInline:"25px"}} data-aos="zoom-in">
                        <FaTelegram size={24} color='blue' /><span>Telegram</span>
                        <span className='secondaryText'>0123-4567-89</span>
                        <button>Message</button>
                    </div>

                    <div className='contact-1 flexColStart' style={{paddingInline:"25px"}} data-aos="zoom-in"> 
                        <FaInstagram size={24} color='blue' /><span>Instagram</span>
                        <span className='secondaryText'>HomyzTravLub</span>
                        <button>Share</button>
                    </div>
                </div>
                <div className='contact-img'>
                    <div className='contact-image-container' data-aos="fade-left">
                        <img src="./connection.jpg" alt="connection-img"/>
                    </div>
                </div>
            </div>
        </section>
  </>
  
}

export default Contact



