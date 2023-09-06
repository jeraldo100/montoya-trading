import React from 'react'
import '../Styles/Footer.css';
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
        <div id="Footer">
            <p>© Montoya Trading. All rights reserved.</p>
            <div>
                <a href = "https://www.facebook.com/montoyatrading/" target="_blank" style={{textDecoration: 'none'}}><BsFacebook id="Socials" /></a>
                <BsTwitter id="Socials" /> 
                <BsInstagram id="Socials" /> 
            </div>
        </div>
    </>
  );
}

export default Footer;