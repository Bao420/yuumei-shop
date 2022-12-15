import { useState, useContext } from "react";
import { BsSearch, BsCart2 } from "react-icons/bs"
import Context from "../../../store/Context";

import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {

    const iconNumber = useContext(Context)

    const [show, setShow] = useState(false)

    return (
        <div className="header">
            <div id="search-btn" className="icons"
                onClick={() => { setShow(!show) }}
            >
                <BsSearch />
            </div>

            <nav className="navbar">
                <a href="#Home">HOME</a>
                <a href="#Menu">MENU</a>
                <a href="#About">ABOUT</a>
                <span className="space"></span>
                <a href="#Reviews">REVIEWS</a>
                <a href="#Contact">CONTACT</a>
                <a href="#Blogs">BLOGS</a>
            </nav>

            <Link to="/Cart" className="icons cart-btn" ><BsCart2 />
                <span>{iconNumber.cart.length}</span>
            </Link>

            <Link to="/" className="logo">YuuMei</Link>
            {show && (
                <form action="" className="search-form" data-aos="fade-left" data-aos-delay="200">
                    <input type="search" name="" placeholder="search here..." id="search-box"></input>
                    <label htmlfor="search-box"></label>
                </form>
            )}
        </div>
    );
}

AOS.init({
    duration: 500,
});

export default Header;


