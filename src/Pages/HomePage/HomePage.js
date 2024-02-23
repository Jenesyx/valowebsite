import React from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import SelfAdvertise from '../../Components/SelfAdvertise/SelfAdvertise'

function HomePage() {
    return (
        <>
            <Header/>
            <section className="valo-section">
                <div className="left-valo">
                    <p><span>Valorant</span> Section</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Quam in neque sagittis consequat. Diam enim cursus magna ac nisl amet purus enim ac. Viverra risus gravida interdum quis risus feugiat molestie ac viverra. Tristique sit lectus amet volutpat nisi porttitor pellentesque.
                    </p>
                </div>
                <div className="right-valo">
                    <div className="boosting both-valo">
                        <p><span>Valorant</span><br />Boosting</p>
                    </div>
                    <div className="accounts both-valo">
                        <p><span>Valorant</span><br />Accounts</p>
                    </div>
                </div>
            </section>
            <section className='advertise-section'>
                <SelfAdvertise/>
            </section>
        </>
    )
}

export default HomePage