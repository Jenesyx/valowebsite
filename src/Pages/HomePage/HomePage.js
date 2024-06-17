import React, { useState } from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import SelfAdvertise from '../../Components/SelfAdvertise/SelfAdvertise'
import Support from '../../Images/Support.png'
import Shield from '../../Images/Shield.png'
import Fast from '../../Images/Fast.png'
import Polygon from '../../Images/Polygon.png'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'

function HomePage() {

    const navigate = useNavigate();

    const toValorant = () => {
        navigate('/boosting')
    }
    return (
        <>
            <Header/>
            <section id='valo-section' className="valo-section">
                <div className="left-valo">
                    <p><span>Valorant</span> Section</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quam in neque sagittis consequat. Diam enim cursus magna ac nisl amet purus enim ac. Viverra risus gravida interdum quis risus feugiat molestie ac viverra. Tristique sit lectus amet volutpat nisi porttitor pellentesque.
                    </p>
                </div>
                <div className="right-valo">
                    <div onClick={toValorant} className="boosting both-valo">
                        <p><span>Valorant</span><br />Boosting</p>
                    </div>
                    <div className="accounts both-valo">
                        <p><span>Valorant</span><br />Accounts</p>
                    </div>
                </div>
            </section>
            <section className='advertise-section'>
                <SelfAdvertise Icon={Support} Text="Lorem ipsum dolor sit amet consectetur. Quam in neque sagittis consequat. Diam enim cursus magna ac nisl amet purus enim ac. Viverra risus gravida interdum quis risus feugiat molestie ac viverra. Tristique sit lectus amet volutpat nisi porttitor pellentesque."/>
                <SelfAdvertise Icon={Shield} Text="Lorem ipsum dolor sit amet consectetur. Quam in neque sagittis consequat. Diam enim cursus magna ac nisl amet purus enim ac. Viverra risus gravida interdum quis risus feugiat molestie ac viverra. Tristique sit lectus amet volutpat nisi porttitor pellentesque."/>
                <SelfAdvertise Icon={Fast} Text="Lorem ipsum dolor sit amet consectetur. Quam in neque sagittis consequat. Diam enim cursus magna ac nisl amet purus enim ac. Viverra risus gravida interdum quis risus feugiat molestie ac viverra. Tristique sit lectus amet volutpat nisi porttitor pellentesque."/>
            </section>
            <section id='mentor-section' className='mentor-section'>
                <p className='mentor--title'><span>////</span> &nbsp;&nbsp;Improve your <span>skills</span></p>
                <p className='mentor--text'>Embarking on the journey of becoming a better Valorant player is a dynamic and rewarding experience, and mentorship is the key to unlocking your full potential. A mentor serves as a guiding force, offering personalized insights and constructive feedback to elevate your game skills. Through mentorship, players gain the knowledge and expertise needed to refine their aim, master strategic movements, and optimize decision-making. The mentor-player relationship fosters an environment where mistakes become valuable lessons, and victories are celebrated together.</p>
                <div className="book-mentor">
                    <div className="mentor-left child">
                        <ul>
                            <li><img src={Polygon} alt="Polygon-Icon" />Precision Aiming & Crosshair Placement</li>
                            <li><img src={Polygon} alt="Polygon-Icon" />Advantageous Positioning</li>
                            <li><img src={Polygon} alt="Polygon-Icon" />Economy Management</li>
                            <li><img src={Polygon} alt="Polygon-Icon" />Game Strategies and Tactics</li>
                            <li><img src={Polygon} alt="Polygon-Icon" />Mindset and Mental Toughness</li>
                        </ul>
                    </div>
                    <div className="mentor-right child">
                        <div className="mentor-btn">Book Now!</div>
                    </div>
                </div>
            </section>
            <section id='aboutus-section' className='aboutus-section'>
                <p className='aboutus--title'><span>////</span> &nbsp;&nbsp;About <span>us</span></p>
                <div className="aboutus-text">
                    <div className="aboutus-c-holder">
                        <p className='aboutus-content'>Lorem ipsum dolor sit amet consectetur. Orci sit dui consectetur mi facilisis sed ipsum semper. Dictum aenean egestas est tincidunt morbi pellentesque turpis sit magna. Quam proin sit purus elit et. Faucibus sapien convallis blandit eget amet sollicitudin morbi commodo. Dui sapien hac justo felis condimentum amet odio lectus. Tincidunt malesuada euismod lectus ornare quis nullam eget volutpat purus. Phasellus nulla sed quisque lobortis. Neque ut est odio velit urna risus quis.</p>
                    </div>
                    <div className="aboutus-bold">
                        <div>
                            <p>About</p>
                            <p>US</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='stay-touch'>
                <div className='touch-holder'>
                    <div><p>Stay in <span>touch!</span></p></div>
                    <div className='input-colors'></div>
                    <input type="email" placeholder='Write your email ... We dont want to spam :)'/>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage