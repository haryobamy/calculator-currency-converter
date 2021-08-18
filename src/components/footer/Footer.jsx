import React from 'react'
import * as FaIcons from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-Container">
                <div className="footer-wrapper">
                    <div className="social-media">
                        <div className='SocialMediaWrapper'>
                            <div className='SocialLogo' to='/'>
                                Badmus
                            </div>
                            <div className='SocialIcons'>
                                <div className='SocialIconLink' href='/' target='_blank' aria-label='facebook' rel='noopener noreferrer'>
                                    <FaIcons.FaFacebook />
                                </div>
                                <div className='SocialIconLink' href='/' target='_blank' aria-label='instagrem' rel='noopener noreferrer'>
                                    <FaIcons.FaInstagram />
                                </div>
                                <div className='SocialIconLink' href='/' target='_blank' aria-label='twitter' rel='noopener noreferrer'>
                                    <FaIcons.FaTwitter />
                                </div>
                                <div className='SocialIconLink' href='/' target='_blank' aria-label='youtube' rel='noopener noreferrer'>
                                    <FaIcons.FaYoutube />
                                </div>
                                <div className='SocialIconLink' href='wa.me/2348175875590' target='_blank' aria-label='whatsapp' rel='noopener noreferrer'>
                                    <FaIcons.FaWhatsapp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
