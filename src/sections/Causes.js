import React from 'react';

const CausesSurconsommation = () => {
    return (
        <section id="causes-section" className='d-nonee'>
            <div className="container">
                <div className="row flex-row-reverse gap-0">
                    <div className="col-lg-6 col-xs-12 mb-4 mb-lg-0">
                        <div className="container pe-3 pe-md-0 text-start">
                            <a href="#consequences-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                                <i className="bi bi-arrow-right me-2"></i> Suivant
                            </a>
                            <div className="title-header mt-2">
                                <h1 className='section-title text-start fs-3 mb-4 animate__fadeInLeftBig'>Les causes de la surconsommation <b>l’eau</b>?</h1>
                                <p className="sub-title text-start pe-3 mb-4">L’eau douce est une ressource limitée, mais sa consommation ne cesse d’augmenter sous l’effet de plusieurs facteurs. Voici les principales causes de cette surconsommation préoccupante:</p>
                            </div>
                            <div className="content">
                                <div className="accordion accordion-flush rounded-3" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne-1" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Agriculture et irrigation excessive
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne-1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne-1" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                L’agriculture représente environ 70 % de la consommation mondiale d’eau. Certaines cultures, comme le riz et le coton, nécessitent une grande quantité d’eau pour leur production. L’irrigation excessive, souvent inefficace, entraîne un gaspillage important.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo-1" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Industrie et production
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo-1" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo-1" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Les industries textile, chimique et pétrolière utilisent d'énormes volumes d’eau pour des processus tels que le refroidissement, le lavage et la fabrication de produits. Ces usages intensifs contribuent fortement à la raréfaction de l’eau potable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree-1" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Gaspillage domestique & Croissance démographique
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree-1" className="accordion-collapse collapse" aria-labelledby="flush-headingThree-1" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <b>Gaspillage domestiques :</b>
                                                <p className='mb-2'>Douches trop longues - Arrosage excessif des jardins - Fuites non réparées</p>
                                                <b>Croissance démographique :</b> 
                                                <p className='mb-1'>Avec l’augmentation de la population mondiale, la demande en eau ne cesse de croître. Plus de personnes signifie plus de besoins en eau pour boire, cuisiner, se laver et produire des biens de consommation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour-1" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Mauvaise gestion des ressources
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour-1" className="accordion-collapse collapse" aria-labelledby="flush-headingFour-1" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <p className='m-0'>
                                                    Dans de nombreux pays, les infrastructures de distribution d’eau sont vétustes et provoquent des pertes importantes. De plus, l’absence de politiques de gestion durable aggrave le problème.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFive-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive-1" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Pollution de l’eau
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive-1" className="accordion-collapse collapse" aria-labelledby="flush-headingFive-1" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <b>L’eau est également contaminée par les activités humaines :</b> <br/>
                                                <p className='mb-1'>
                                                    Produits chimiques issus de l’industrie - Engrais et pesticides agricoles - Déchets domestiques rejetés sans traitement
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 mb-5 mb-lg-0">
                        <div className="h-100 pe-0 pe-lg-3">
                            <div className="d-flex justify-content-center justify-content-lg-start h-100">
                                <div className="statistics custom-width">
                                    <div className="content">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title text-center">La distribution de la surconsommation <b>d’eau</b> par secteur</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary text-center">Secteurs de l'agriculture, industrie et autres </h6>
                                                <hr class="hr" />
                                                <div className="chart position-relative d-flex-row justify-content-center align-content-center p-2">
                                                    <img src="./images/water-distribution.png" alt="Statistiques de la consommation" loading='lazy' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default CausesSurconsommation;
