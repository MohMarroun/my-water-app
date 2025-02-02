import React from 'react';

const Pourquoi = () => {
    return (
        <section id="pourquoi-section">
            <div className="container">
                <div className="d-flex gap-2">
                    <div className="col-xl-6">
                        <div className="container ps-0 text-start">
                            <a href="#consequences-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                                <i className="bi bi-arrow-right me-2"></i> Suivant
                            </a>
                            <div className="title-header mt-2">
                                <h1 className='section-title text-start fs-2 mb-4'>Pourquoi faut-il économiser <b>l’eau</b> ?</h1>
                                <p className="sub-title text-start pe-3 mb-4">L’eau est essentielle à notre survie, mais nous en gaspillons souvent sans nous en rendre compte. Saviez-vous qu’un robinet qui goutte peut gaspiller jusqu’à 120 litres d’eau par jour ? Découvrez comment notre consommation quotidienne impacte notre planète.</p>
                            </div>
                            <div className="content">
                                <ul class="list-group list-group-light text-start mb-4">
                                    <li className="list-group-item d-flex align-items-center px-3 border-0 gap-2 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">1</button>
                                        Un Marocain consomme en moyenne entre <b>70 et 140 litres</b> d’eau par jour.
                                    </li>
                                    <li className="list-group-item d-flex align-items-center px-3 border-0 gap-2 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">2</button>
                                        Une chasse d’eau utilise <b>5 à 9 litres</b> à chaque utilisation.
                                    </li>
                                    <li className="list-group-item d-flex align-items-center px-3 border-0 gap-2 ps-0">
                                        <button className="btn btn-primary" type="button">3</button>
                                        L’agriculture représente <b>70%</b> de la consommation d’eau mondiale.
                                    </li>
                                </ul>
                                <a href="/" className="btn btn-outline-primary btn-md d-inline-flex">
                                    <i className="bi bi-info-circle me-2"></i> Voir détails
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="container h-100">
                            <div className="d-flex justify-content-end h-100">
                                <div className="statistics p-2">
                                    <div className="content p-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title text-center">La consommation <b>d’eau</b> d’un étudiant sur une journée</h5>
                                                <h6 className="card-subtitle mb-2 text-body-secondary text-center">Infographie de la consommation par litres</h6>
                                                <hr class="hr" />
                                                <div className="chart position-relative">
                                                    <img className="h-100 w-100" src="./images/chart.png" alt="" />
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

export default Pourquoi;
