import React from 'react';

const CausesSurconsommation = () => {
    return (
        <section id="causes-section" className='d-nonee'>
            <div className="container">
                <div className="row gap-0">
                    <div className="col-lg-6 col-xs-12 mb-5 mb-lg-0">
                        <div className="h-100 pe-0 pe-lg-3">
                            <div className="d-flex justify-content-end justify-content-lg-start h-100">
                                <div className="statistics">
                                    <div className="content">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title text-center">La distribution de la surconsommation <b>d’eau</b> par secteur</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary text-center">Infographie de la consommation par litres</h6>
                                                <hr class="hr" />
                                                <div className="chart position-relative p-2">
                                                    <img className="h-100 w-100" src="./images/chart.png" alt="Statistiques de la consommation" loading='lazy' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 pe-0">
                        <div className="container pe-3 pe-md-0 text-start">
                            <a href="#consequences-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                                <i className="bi bi-arrow-right me-2"></i> Suivant
                            </a>
                            <div className="title-header mt-2">
                                <h1 className='section-title text-start fs-2 mb-4 animate__fadeInLeftBig'>Pourquoi faut-il économiser <b>l’eau</b> ?</h1>
                                <p className="sub-title text-start pe-3 mb-4">L’eau est essentielle à notre survie, mais nous en gaspillons souvent sans nous en rendre compte. Saviez-vous qu’un robinet qui goutte peut gaspiller jusqu’à 120 litres d’eau par jour ? Découvrez comment notre consommation quotidienne impacte notre planète.</p>
                            </div>
                            <div className="content">
                                <ul class="list-group list-group-light text-start mb-4">
                                    <li className="list-group-item d-flex align-items-start align-items-md-center px-3 border-0 gap-3 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">1</button>
                                        <p className='m-0'>Un Marocain consomme en moyenne entre <b>70 et 140 litres</b> d’eau par jour.</p>
                                    </li>
                                    <li className="list-group-item d-flex align-items-start align-items-md-center px-3 border-0 gap-3 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">2</button>
                                        <p className='m-0'>Une chasse d’eau utilise <b>5 à 9 litres</b> à chaque utilisation.</p>
                                    </li>
                                    <li className="list-group-item d-flex align-items-start align-items-md-center px-3 border-0 gap-3 ps-0">
                                        <button className="btn btn-primary" type="button">3</button>
                                        <p className="m-0">L’agriculture représente <b>70%</b> de la consommation d’eau mondiale.</p>
                                    </li>
                                </ul>
                                <a href="/" className="btn btn-outline-primary btn-md d-inline-flex">
                                    <i className="bi bi-info-circle me-2"></i> Voir détails
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CausesSurconsommation;
