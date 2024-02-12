import React from 'react'
import './Header.css'
import Home from '../../Images/Home.png'
import Valorant from '../../Images/Valorant.png'
import AboutUs from '../../Images/About-us.png'
import Mentoring from '../../Images/Mentoring.png'
import Terms from '../../Images/Terms.png'
import Signin from '../../Images/Signin.png'

function Header() {
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
                <div className="nav">
                    <div className="nav-left">
                        <p>it's <span>Time</span><br/>to change!</p>
                    </div>
                    <div className="nav-right">
                        <div className="discord">
                            <img src="" alt="" />
                            <p>Discord</p>
                        </div>
                        <div className="Tiktok">
                            <img src="" alt="" />
                            <p>TikTok</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header