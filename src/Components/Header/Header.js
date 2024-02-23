import React from 'react'
import './Header.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from '../../Images/Home.png'
import Valorant from '../../Images/Valorant.png'
import AboutUs from '../../Images/About-us.png'
import Mentoring from '../../Images/Mentoring.png'
import Terms from '../../Images/Terms.png'
import Signin from '../../Images/Signin.png'
import discord from '../../Images/discord.png'
import tiktok from '../../Images/tiktok.png'
import Image1 from '../../Images/Image1.png'
import Image2 from '../../Images/Image2.png'
import Image4 from '../../Images/Image4.png'
import Image5 from '../../Images/Image5.png'
import Image6 from '../../Images/Image6.png'
import Image7 from '../../Images/Image7.png'

function Header() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <>
            <nav>
                <header className='header'>
                    <div className="left">
                        <ul>
                            <li><img src={Home} alt="Home-icon" />Home</li>
                            <li><img src={Valorant} alt="Valorant-icon" />Valorant</li>
                            <li><img src={AboutUs} alt="Aboutus-icon" />About us</li>
                            <li><img src={Mentoring} alt="Mentoring-icon" />Mentoring</li>
                            <li><img src={Terms} alt="Terms-icon" />Terms</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><img src={Signin} alt="Signin-icon" />Sign in/up</li>
                        </ul>
                    </div>
                </header>
                <div className="slider">
                <Slider {...settings}>
                    <div>
                        <img src={Image1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={Image2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={Image4} alt="Slide 4" />
                    </div>
                    <div>
                        <img src={Image5} alt="Slide 5" />
                    </div>
                    <div>
                        <img src={Image6} alt="Slide 6" />
                    </div>
                    <div>
                        <img src={Image7} alt="Slide 7" />
                    </div>
                </Slider>
                </div>
                <div className="nav">
                    <div className="nav-left">
                        <p>It's <span>Time</span><br/>to change!</p>
                    </div>
                    <div className="nav-right">
                        <div className="discord">
                            <div className="nav-image">
                                <img src={discord} alt="discord-icon" />
                            </div>
                            <p>Discord</p>
                        </div>
                        <div className="tiktok">
                            <div className="nav-image">
                                <img src={tiktok} alt="tiktok-icon" />
                            </div>
                            <p>TikTok</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header