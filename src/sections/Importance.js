import React from 'react';

const ImportanceEau = () => {
    return (
        <section id="importance-section" className='d-non'>
            <div className="container">
                <div className="row gap-0">
                    <div className="col-lg-6 col-xs-12 mb-5 mb-lg-0">
                        <div className="container ps-3 ps-md-0 text-start">
                            <a href="#causes-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                                <i className="bi bi-arrow-right me-2"></i> Suivant
                            </a>
                            <div className="title-header mt-2">
                                <h1 className='section-title text-start fs-2 mb-4 animate__fadeInLeftBig'>Pourquoi faut-il économiser <b>l’eau</b> ?</h1>
                            </div>
                            <div className="content">
                                <ul class="list-group list-group-light text-start mb-3">
                                    <li className="list-group-item d-flex align-items-start px-3 border-0 gap-3 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </button>
                                        <p className="sub-title text-justify pe-3 mb-3">L’eau est une ressource indispensable à la vie sur Terre. Elle hydrate les êtres vivants, soutient la photosynthèse des plantes, régule le climat et préserve l’équilibre des écosystèmes. Au-delà de son rôle naturel, l’eau est essentielle à l’agriculture, à l’industrie et à de nombreuses activités humaines.</p>
                                    </li>
                                    <li className="list-group-item d-flex align-items-start px-3 border-0 gap-3 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </button>
                                        <p className="sub-title text-justify pe-3 mb-4">Cependant, la pénurie et la pollution de l’eau sont aujourd’hui des défis majeurs qui menacent notre avenir. La surexploitation des ressources hydriques, le changement climatique et les activités humaines accélèrent l’épuisement des réserves d’eau douce, mettant en danger aussi bien la biodiversité que notre propre survie.</p>
                                    </li>
                                    <li className="list-group-item d-flex align-items-start px-3 border-0 gap-3 ps-0 pb-0">
                                        <button className="btn btn-primary" type="button">
                                            <i className="bi bi-lightbulb-fill"></i>
                                        </button>
                                        <p className="sub-title text-justify pe-3 mb-4">Économiser l’eau, c’est protéger notre planète et garantir un avenir durable pour tous.</p>
                                    </li>
                                </ul>
                                <a href="/" className="btn btn-outline-primary btn-md d-inline-flex">
                                    <i className="bi bi-info-circle me-2"></i> Voir détails
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xs-12 pe-0">
                        <div className="container h-100 ps-0 ps-lg-3">
                            <div className="d-flex justify-content-start justify-content-lg-end h-100">
                                <div className="statistics p-2">
                                    <div className="content p-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <div className="chart position-relative p-2">
                                                    <img className="h-100 w-100" src="./images/save-water.svg" alt="Statistiques de la consommation" loading='lazy' />
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

export default ImportanceEau;
