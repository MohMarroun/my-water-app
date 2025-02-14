import React from 'react';

const Contact = () => {
    return (
        <section id='contact-section'>
            <div className="container">
                <div className="contact-form mx-auto mt-3 bg-white rounded shadow" style={{ maxWidth: '600px', padding:'35px' }}>
                    <div className="title-header">
                        <a href="#solutions-section" className="next-btn btn btn-primary btn-sm d-inline-flex">
                            <i className="bi bi-arrow-right me-2"></i> Précédent
                        </a>
                        <h1 className="text-center fs-2 mb-2 mt-2">Contactez-nous</h1>
                        <p className="text-center text-muted mb-5">Nous serions ravis d'avoir de vos nouvelles. Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.</p>
                    </div>
                    <form onSubmit={()=>{}}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="nom" className="form-label text-start d-block fw-bold">Nom</label>
                                <input type="text" className="form-control" id="nom" name="nom" placeholder="Entrez votre nom" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prenom" className="form-label text-start d-block fw-bold">Prénom</label>
                                <input type="text" className="form-control" id="prenom" name="prenom" placeholder="Entrez votre prénom" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block fw-bold">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="exemple@email.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-start d-block fw-bold">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-3">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
