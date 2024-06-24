import React from 'react'
import './Footer.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Footer() {

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <div className='footer'>
                <div className="left-footer">
                    <div><img src="" alt="" /></div>
                </div>
                <div className="right-footer">
                    <div className="zeropoint f-list">
                        <p>Zeropoint</p>
                        <ul>    
                            <li>About us</li>
                        </ul>
                    </div>
                    <div className="resources f-list">
                        <p>Resources</p>
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                    <div className="help f-list">
                        <p>Help</p>
                        <ul>
                            <li>Contact us</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className="resources f-list">
                        <p>Community</p>
                        <ul>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Tiktok</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer