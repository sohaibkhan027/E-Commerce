import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
        <div className='main-footer container'>
            <div className='parent-footer'>
                <div className='cols-1'>
                    <h2 className='fonts'>Get In Touch</h2>
                    <div className='row-1'>
                        <div className='mail-icon d-flex'>
                            <FontAwesomeIcon icon={faMailBulk} />
                            <p>customercare@xoxoutfit.com.pk</p>
                        </div>
                        <div className='phone-icon d-flex'>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>+93########</p>
                        </div>
                        <strong>Customer services timing</strong>
                        <p>Monday-Saturday
                            9:30 am to 4.00 pm (Ramadan Timings)</p>
                        <strong>Responce Time:</strong><p>24 Working Hours (excluding holidays)</p>
                    </div>
                </div>
                <div className='cols-2 siz'>
                </div>

                <div className='cols-3 siz'>
                    <h2 className='fonts'>Brands</h2>
                    <ul className='footer-li'>
                        <li><a  href="https://beoneshopone.com/pages/men" target="_blank">ONE</a></li>
                        <li><a  href="https://outfitters.com.pk/" target="_blank">OUTFITTERS</a></li>
                        <li><a  href="https://www.nike.com/" target="_blank">NIKE</a></li>
                        <li><a  href="https://www.levi.com/US/en_US/" target="_blank">LEVI'S</a></li>

                        <li>EQUATOR</li>
                        <li></li>
                    </ul>
                </div>


                <div className='cols-4 cols-3 siz'>
                    <h2 className='fonts'>About US</h2>
                    <ul className='footer-li'>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/policy">Pirvacy-Policy</Link></li>
                        <li>BLOG</li>
                        <li>STORE</li>
                    </ul>
                </div>

                <div className='cols-5 cols-3 siz'>
                    <h2 className='fonts'>Exchange & Return</h2>
                    <ul className='footer-li'>
                        <li>EXCHANGE & RETURN POLICY</li>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS & CONDITIONS</li>
                    </ul>


                </div>

            </div>
        </div>
        <footer>Copyright © 2024, xox all rights reserved. Powered by Hive Metrics</footer>
        </>

    )
}

export default Footer