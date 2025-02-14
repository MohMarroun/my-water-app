import React from 'react';

const Contact = () => {
    return (
        <section id='contact-section'>
            <div className="container">
                <div className="contact-form mx-auto mt-5 p-4 bg-white rounded shadow" style={{ maxWidth: '600px' }}>
                    <h3 className="text-center">Contactez-nous</h3>
                    <p className="text-center text-muted">Nous serions ravis d'avoir de vos nouvelles. Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.</p>
                    <form onSubmit={()=>{}}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="nom" className="form-label text-start d-block">Nom</label>
                                <input type="text" className="form-control" id="nom" name="nom" placeholder="Entrez votre nom" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="prenom" className="form-label text-start d-block">Prénom</label>
                                <input type="text" className="form-control" id="prenom" name="prenom" placeholder="Entrez votre prénom" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-start d-block">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="exemple@email.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-start d-block">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
