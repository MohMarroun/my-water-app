import React from 'react';

const Consequences = () => {
    return (
        <section id="consequences-section">
            <div className="container">
                <div className="d-flex gap-2">
                    <div className="col-sm-6">
                        <div className="container text-start">
                            <div className="lightbox" data-mdb-lightbox-init>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <img
                                            src="./images/csq-2.jpg"
                                            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                                            alt="Table Full of Spices"
                                            className=" w-100 mb-2 mb-md-4 shadow-1-strong rounded"
                                        />
                                        <img
                                            src="./images/csq-4.webp"
                                            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
                                            alt="Coconut with Strawberries"
                                            className="h-50 w-100 shadow-1-strong rounded"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <img
                                            src="./images/csq-3.jpg"
                                            data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
                                            alt="Dark Roast Iced Coffee"
                                            className="h-100 w-100 shadow-1-strong rounded"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="container pe-0 text-start">
                            <a href="#solutions-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                                <i className="bi bi-arrow-right me-2"></i> Suivant
                            </a>
                            <div className="title-header mt-2">
                                <h1 className='section-title text-start fs-3 mb-4'>Les conséquences de la surconsommation de <b>l’eau</b> ?</h1>
                                <p className="sub-title text-start pe-3 mb-4">
                                    Cette section vise à sensibiliser les visiteurs aux impacts négatifs de la surconsommation d’eau sur l’environnement, 
                                    la société et les ressources naturelles.
                                </p>
                            </div>
                            <div className="content">
                                <div className="accordion accordion-flush rounded-3" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Assèchement des ressources naturelles
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                📌 Explication : L’usage excessif de l’eau épuise les nappes phréatiques et les rivières. Dans certaines régions, cela entraîne une raréfaction de l’eau potable.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Difficultés d’accès à l’eau potable
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                📌 Explication : Dans de nombreuses régions du monde, des millions de personnes souffrent du manque d’eau en raison d’une mauvaise gestion des ressources et des sécheresses accrues. <br/>
                                                🖼 Exemple concret : « En Afrique subsaharienne, des familles doivent marcher plusieurs kilomètres chaque jour pour trouver une source d’eau potable. »
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Impact sur les écosystèmes
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                📌 Explication : La consommation excessive d’eau entraîne le dessèchement des rivières et la disparition de certains habitats naturels. Cela menace des espèces animales et végétales. <br/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Conséquences économiques et sociales
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                            📌 Explication : Les pénuries d’eau obligent certaines populations à migrer, provoquant des conflits pour l’accès aux ressources. <br/>
                                            📊 Statistiques : « D’ici 2050, plus de 5 milliards de personnes pourraient être confrontées à des pénuries d’eau. » (Source : ONU)
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

export default Consequences;
