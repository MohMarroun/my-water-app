import React from 'react';

const Footer = () => {
    const logoStyle = {
        height: '40px'
    }
    const navStyle = {
        padding: '1.25rem 0rem'
    }
    return (
        <footer>
            <div className="container-fluid">
                <div className="nav-logo">
                    <div className="logo">
                        <img src="./images/water-logo-4.svg" alt="" style={logoStyle}/>
                    </div>
                    <nav style={navStyle}>
                        <ul className='d-flex justify-content-center list-unstyled m-0'>
                            <li className="ms-2">
                                <a href="#header-section">Accueil</a>
                            </li>
                            <li className="ms-0">
                                <a href="#pourquoi-section">Pourquoi?</a>
                            </li>
                            <li className="ms-2">
                                <a href="#consequences-section">Conséquences</a>
                            </li>
                            <li className="ms-2">
                                <a href="#solutions-section">Solutions</a>
                            </li>
                            <li className="ms-2">
                                <a className='pe-0' href="#apropos-section">A Propos</a>
                            </li>
                        </ul>
                    </nav>
                    <ul className="social-media d-flex justify-content-center gap-3 list-unstyled m-0 mb-5">
                        <li>
                            <a className='pe-0' href="https://fr-fr.facebook.com">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a className='pe-0' href="https://web.whatsapp.com">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a className='pe-0' href="https://x.com">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                        </li>
                        <li>
                            <a className='pe-0' href="https://www.instagram.com">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="text-center p-3" style={{borderTop: '1px solid #ddd'}}>
                    © 2025 Copyright:
                </div>
            </div>
        </footer>
    );
}

export default Footer;
