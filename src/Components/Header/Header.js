import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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

function Header({showSlider = true}) {

    const navigate = useNavigate();
    const location = useLocation();

    const toHome = () => {
        navigate('/')
    }

    const toTerms = () => {
        navigate('/terms')
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    const toValorant = () => {
        if (location.pathname === '/') {
            const valoSection = document.getElementById('valo-section');
            if (valoSection) {
                const yOffset = -160;
                const y = valoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
        navigate('/');
        }
    }

    const toMentoring = () => {
        if (location.pathname === '/') {
            const mentorSection = document.getElementById('mentor-section');
            if (mentorSection) {
                const yOffset = -250;
                const y = mentorSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
        navigate('/');
        }
    }

    const toAbout = () => {
        if (location.pathname === '/') {
            const aboutSection = document.getElementById('aboutus-section');
            if (aboutSection) {
                const yOffset = -100;
                const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
        navigate('/');
        }
    }

    return (
        <>
            <nav>
                <header className='header'>
                    <div className="left">
                        <ul>
                            <li onClick={toHome}><div><img src={Home} alt="Home-icon"/></div><p>Home</p></li>
                            <li onClick={toValorant}><div><img src={Valorant} alt="Valorant-icon" /></div><p>Valorant</p></li>
                            <li onClick={toMentoring}><div><img src={Mentoring} alt="Mentoring-icon" /></div><p>Mentoring</p></li>
                            <li onClick={toAbout}><div><img src={AboutUs} alt="Aboutus-icon" /></div><p>About us</p></li>
                            <li onClick={toTerms}><div><img src={Terms} alt="Terms-icon" /></div><p>Terms</p></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><div><img src={Signin} alt="Signin-icon" /></div><p>Sign in/up</p></li>
                        </ul>
                    </div>
                </header>
                {showSlider && (
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
                )}
                {showSlider && (
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
                )}
            </nav>
        </>
    )
}

export default Header