import React from 'react';

const Header = () => {
    const style = {
        height: '40px',
    }
    const divStyle= {
        height: '3rem',
        width: '3rem',
        backgroundColor: 'red',
        display: 'none'
    }
    return (
        <header id="header-section" className='position-relative pb-0 pb-md-5'>
            <div className="container">
                <nav className="row justify-content-between align-items-center">
                    <div className="position-absolute" style={divStyle}>

                    </div>
                    <div className="col-lg-4">
                        <div className="logo">
                            <div className="d-flex justify-content-xl-start align-items-center justify-content-center gap-3">
                                <img src='./images/ECOWATER.svg' alt="" loading='lazy' style={style}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <ul className='d-flex justify-content-end list-unstyled m-0 '>
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
                    </div>
                </nav>
                <div className="body-content">
                    <div className="row">
                        <div className="col-xl-7 col-xs-12">
                            <div className="left justify-content-xl-center justify-content-start">
                                <div className="row">
                                    <div className="col-lg-10 col-xs-12">
                                        <h1 className="header-title text-center text-lg-start">L’eau, une ressource <b>précieuse</b> à préserver</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-10 col-xs-12">
                                        <p className='text-center text-md-start'>
                                            <i className="bi bi-quote text-primary start fs-3 me-2"></i>
                                            Comprendre l’impact de notre consommation d’eau est la première étape vers un usage plus responsable. 
                                            Ce site vous guide à travers les enjeux,les conséquences et les solutions pour préserver cette ressource vitale au quotidien.
                                            <i className="bi bi-quote text-primary position-absolute end fs-3 ms-2"></i>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="actions d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-2 mt-4">
                                    <a 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSemzaCW0rz6Q7WcsyOVXrFYg3Tiayo2Aw1UA0SISe-6Ky3I2A/viewform" 
                                        className="btn btn-primary">
                                            <i className="bi bi-ui-checks-grid me-2"></i>
                                        Questionnaire
                                    </a>
                                    <a href="https://youtu.be/XOZRSWR3GLY?feature=shared" className="btn d-flex justify-content-center justify-content-md-start">
                                        <i className="bi bi-play-circle fs-4 lh-1 me-2"></i> Vidéo Démonstratif
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 d-none d-md-block">
                            <div className="right position-relative">
                                <div className="container pe-0 text-center h-100">
                                    <img className="h-100 w-100" src="./images/water.png" alt="" loading='lazy' />
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
