import React from 'react'
import '../Styles/PagesCSS/ContactUs.css';
import EmailForm from '../Components/EmailForm';
import { BiSolidEnvelope } from "react-icons/bi";
import { FaViber } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiSolidMap } from "react-icons/bi";


function ContactUs() {
  return (
    <>
        <h1 id='contactH1'>Contact Us</h1>
        <div id='contacts'>
            <p><BiSolidEnvelope id='icons' /> <span>Email Us</span>: montoya_trading@yahoo.com</p>
            <p><FaViber id='icons' /> <span>Viber</span>: +639195956096</p>
            <p><BiLogoFacebookCircle id='icons' /> <span>Facebook</span>: <a href='https://www.facebook.com/montoyatrading/' target="_blank">https://www.facebook.com/montoyatrading/</a></p>
            <p><BiSolidMap id='icons' /> <span>Location</span>: Marulas, Valenzuela City, Philippines</p>
        </div>
        <div id='formContainer'>
            <h1 id='requestH1'>Send a Request</h1>
            <EmailForm />
        </div>
    </>
  )
}

export default ContactUs