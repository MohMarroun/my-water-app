import React from 'react';

const Header = () => {
    const style = {
        height: '40px',
    }
    return (
        <header id="header-section" className='position-relative'>
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <div className="d-flex align-items-center gap-3">
                            <img src='./images/water-logo-4.svg' alt="" style={style}/>
                        </div>
                    </div>
                    <ul className='d-flex list-unstyled m-0'>
                        <li className="ms-2">
                            <a href="#Accueil">Accueil</a>
                        </li>
                        <li className="ms-2">
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
                <div className="body-content">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="left">
                                <h1 className="header-title text-start">L’eau, une ressource <b>précieuse</b> à préserver</h1>
                                <p className='text-start'>
                                    <i className="bi bi-quote text-primary start fs-3 me-2"></i>
                                    Comprendre l’impact de notre consommation d’eau est la première étape vers un usage plus responsable. 
                                    Ce site vous guide à travers les enjeux,les conséquences et les solutions pour préserver cette ressource vitale au quotidien.
                                    <i className="bi bi-quote text-primary position-absolute end fs-3 ms-2"></i>
                                </p>
                                <div className="actions d-inline-flex gap-2 mt-4">
                                    <a 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSemzaCW0rz6Q7WcsyOVXrFYg3Tiayo2Aw1UA0SISe-6Ky3I2A/viewform" 
                                        className="btn btn-primary">
                                            <i className="bi bi-ui-checks-grid me-2"></i>
                                        Questionnaire
                                    </a>
                                    <a href="https://youtu.be/XOZRSWR3GLY?feature=shared" className="btn d-inline-flex">
                                        <i className="bi bi-play-circle fs-4 lh-1 me-2"></i> Vidéo Démonstratif
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="right position-relative">
                                <div className="container pe-0 text-center h-100">
                                    <img className="h-100" src="./images/header-picture.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
