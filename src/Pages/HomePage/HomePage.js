import React from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'

function HomePage() {
    return (
        <>
            <Header/>
            <section className="valo-services">
                <div className="left-services">
                    <p><span>Valorant</span> Section</p>
                </div>
                <div className="right-services">
                    <div className="boosting both-services">
                        <p><span>Valorant</span><br />Boosting</p>
                    </div>
                    <div className="accounts both-services">
                        <p><span>Valorant</span><br />Accounts</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage