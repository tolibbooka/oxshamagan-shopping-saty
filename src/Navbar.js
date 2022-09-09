import React from 'react';
import {  NavLink } from 'react-router-dom';




const Navbar = () => {
    return (
        
        <div className="navabar">
            <div className="shopping">
                <nav className="Header">
                    <a href="email"><img src="img/email.png" alt="" />Hello@colorlib.com</a>
                    <a href="Shopping">Free Shipping for all order of $99</a>
                    <a href="Facebook"><img src="img/Facebook.png" alt="" /></a>
                    <a href="Wahtsaap"><img src="img/Watsap.png" alt="" /></a>
                    <a href="Instagrem"><img src="img/inishin.png" alt="" /></a>
                    <a href="Twetter"><img src="img/tvitter.png" alt="" /></a>
                </nav>
                <nav className="nav2">
                    <a href="LogoAppil"><img src="img/logo.svg" alt="" /></a>
                    <a href="Nav"><img src="img/logo2.svg" alt="" /></a>
                    <input type="text" placeholder='Search for products...' />
                    <a href="Telfon"><img src="img/telfon.svg" alt="" /></a>
                    <a href="Like"><img src="img/like.svg" alt="" /></a>
                    <a href="Jhon"><img src="img/Jhon.svg" alt="" /></a>
                </nav>
                
                <nav>
                    <ul className="nav-item">
                    <button className='btn1'><img src="img/menu.svg" alt="" /> <p>Select Categories</p></button>
                        <li><NavLink to='/' activeclassname='selected'>Home</NavLink></ li >
                        <li><NavLink to='/Product' activeclassname='selected'>Product</NavLink></ li>
                        <li><NavLink to='/Stores' activeclassname='selected'>Stores</NavLink></ li>
                        <li><NavLink to='/Contact' activeclassname='selected'>Contact</NavLink></ li>
                        <button className='btn2'><img src="img/arava.svg" alt="" />CART 2</button>
                    </ul>
                </nav>
               
            
            </div>
        </div>
        
    );
};
export default Navbar;