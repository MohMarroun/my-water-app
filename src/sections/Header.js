import React from 'react';

const Header = () => {
    return (
        <header className='mb-3'>
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="logo">Your Logo</div>
                    <ul className='d-flex list-unstyled m-0'>
                        <li className="ms-3">
                            <a href="#">Accueil</a>
                        </li>
                        <li className="ms-3">
                            <a href="#pourquoi-section">Pourquoi?</a>
                        </li>
                        <li className="ms-3">
                            <a href="#consequences-section">Conséquences</a>
                        </li>
                        <li className="ms-3">
                            <a href="#solutions-section">Solutions</a>
                        </li>
                        <li className="ms-3">
                            <a className='pe-0' href="#apropos-section">A Propos</a>
                        </li>
                    </ul>
                </nav>
                <div className="body-content">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="left">Left</div>
                        </div>
                        <div className="col-xl-5">
                            <div className="right">Right</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
