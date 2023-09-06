import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Styles/NavBar.css';
import { BiSolidShoppingBag } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidInfoCircle } from "react-icons/bi";

function NavBar() {
	return (
		<>
			<div id="NavBar">
				<div id = "NavStart">
					<Link to="/" id="HomeLink" style={{textDecoration: 'none'}}>
						Montoya Trading
					</Link>
					<Link to="/ProductsPage" style={{textDecoration: 'none'}}>
						<div id="NavLinks">Products</div>
					</Link>
					<a href = "https://www.facebook.com/montoyatrading/" target="_blank" style={{textDecoration: 'none'}}>
						<div id="NavLinks" >Shop Now <BiSolidShoppingBag id='NavLinksIcons' /></div>
					</a>
				</div>
				<div id = "NavEnd">
					<Link to="/AboutUs" style={{textDecoration: 'none'}}>
						<div id="NavLinks" >About Us <BiSolidInfoCircle id='NavLinksIcons' /></div>
					</Link>
					<Link to="/ContactUs" style={{textDecoration: 'none'}}>
						<div id="NavLinks">Contact Us <BiSolidEnvelope id='NavLinksIcons' /></div>
					</Link>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
		</>
	);
}

export default NavBar;