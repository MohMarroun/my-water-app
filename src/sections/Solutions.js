import React from 'react';

const Solutions = () => {
    const subTitleStyle={
        fontSize:'15px',
        padding:'0 17rem',
        lineHeight: '1.45'
    }
    return (
        <section id="solutions-section">
            <div className="container">
                <div className="section-header">
                    <a href="#consequences-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                        <i className="bi bi-arrow-right me-2"></i> Précédent
                    </a>
                    <div className="title-header mt-2">
                        <h1 className='section-title text-center fs-3 mb-2'>Solutions pour économiser <b>l’eau</b></h1>
                        <p className="sub-title text-center" style={subTitleStyle}>
                        Cette section propose des solutions concrètes et faciles à appliquer au quotidien pour réduire la consommation d’eau. 
                        L'idée est de vous inciter à adopter des gestes responsables
                        </p>
                    </div>
                </div>
                <div className="content-section mt-5">
                    <ul className="d-flex justify-content-around gap-3 list-unstyled m-0">
                        <li className='p-3'>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="logo d-flex align-items-center justify-content-center">
                                    <i className="bi bi-1-circle-fill"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h1 className='title fs-6 fw-700 text-center mb-4'>Réduire sa consommation d’eau à la maison</h1>
                                <ul className='list-unstyled text-start'>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Prendre des douches courtes (5 minutes au lieu de 10 permet d’économiser jusqu’à 60 litres).</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Fermer le robinet lorsqu’on se lave les dents ou les mains.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-0'>Utiliser un lave-vaisselle au lieu de laver à la main (cela réduit jusqu'à 70% de la consommation d'eau).</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='p-3'>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="logo d-flex align-items-center justify-content-center">
                                    <i className="bi bi-2-circle-fill"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h1 className='title fs-6 fw-700 text-center mb-4'>Réutiliser l’eau intelligemment</h1>
                                <ul className='list-unstyled text-start'>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Récupérer l’eau de pluie pour arroser les plantes.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Réutiliser l’eau de cuisson refroidie pour l’arrosage.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-0'>Utiliser des économiseurs d’eau sur les robinets et les douches.</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='p-3'>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="logo d-flex align-items-center justify-content-center">
                                    <i className="bi bi-3-circle-fill"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h1 className='title fs-6 fw-700 text-center mb-4'>Réparer les fuites et améliorer son installation</h1>
                                <ul className='list-unstyled text-start'>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Vérifier et réparer les fuites dès qu’elles apparaissent.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Installer des chasses d’eau à double débit pour économiser jusqu’à 50% d’eau par chasse.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-0'>Utiliser des appareils économes en eau (machine à laver, WC, douchettes).</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='p-3'>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="logo d-flex align-items-center justify-content-center">
                                    <i className="bi bi-4-circle-fill"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h1 className='title fs-6 fw-700 text-center mb-4'>Sensibiliser et adopter des pratiques collectives</h1>
                                <ul className='list-unstyled text-start'>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Parler autour de soi des gestes simples pour économiser l’eau.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-2'>Participer à des campagnes de sensibilisation sur la protection de l’eau.</p>
                                    </li>
                                    <li className='d-flex align-items-start'>
                                        <i className="bi bi-check-lg me-2"></i>
                                        <p className='mb-0'>Éviter les produits qui gaspillent beaucoup d’eau (exemple : certains vêtements nécessitent des milliers de litres d’eau à produire).</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Solutions;
