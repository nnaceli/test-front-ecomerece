import React from 'react'

export default function ContactInformation() {
    return (
        <div className="row justify-content-between">

            <div className="col-12 col-md-6 col-lg-6 col-xl-6 row justify-content-between">

                <div className="col-5">
                    <h6 className="text-white-50">Cotizacion de vehiculos</h6>
                    <p>
                        <a href="#" className="text-decoration-none text-muted">Informacion legal</a>
                    </p>
                </div>

                <div className="col-5">
                    <h6 className="text-white-50">Ralitor S.A</h6>
                    <p>
                        <a href="#" className="text-decoration-none text-muted">Nissan.com.uy</a>
                    </p>

                    <p>
                        <a href="#" className="text-decoration-none text-muted">Politicas de Cookies</a>
                    </p>
                </div>

            </div>

            <div className="col-12 col-md-6 col-lg-6 col-xl-6 row justify-content-between">

                <div className="col-5">
                    <h6 className="text-white-50">Ayuda al cliente</h6>
                    <p>
                        <a href="#" className="text-decoration-none text-muted">Politicas de privacidad</a>
                    </p>
                </div>

                <div className="col-5">
                    <h6 className="text-white-50">Nissan social</h6>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://es-la.facebook.com/nissanargentina/" className="text-decoration-none text-muted">Facebook</a> 
                    </p>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/nissanargentina/?hl=es-la" className="text-decoration-none text-muted">Instagram</a> 
                    </p>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/nissanargentina?lang=es" className="text-decoration-none text-muted">Twitter</a> 
                    </p>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/nissanargentina" className="text-decoration-none text-muted">YouTube</a>
                    </p>
                </div>

            </div>

        </div>
    )
}
