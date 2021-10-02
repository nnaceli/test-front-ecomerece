import React from 'react'

import './home.css'

export default function CoverInformation(props) {
    return (
        <div className="container col-10 mt-5" style={{minHeight: 600}}>
                <div className="h1 text-danger bg-light display-3 w-75" style={{fontWeight: 900, opacity: '80%', borderRadius: 10}}>AHORA ES ONLINE</div>
                <p className="text-left bg-light p-2 w-50" style={{fontSize: 20, fontFamily: 'sans-serif', fontWeight: 200, opacity: '80%', borderRadius: 10}}>
                    Con Nissan Store podes acceder a tu nuevo 0km con todos
                    los servicios asociados desde la comodidad de tu sofa.
                    Probanos!
                </p>
                <button type="button" className="
                    btn btn-danger 
                    p-3"
                    style={{borderRadius: 10}}>
                    <div className="
                        row justify-content-start
                        align-items-center
                    ">
                        {props.linkStore}
                    </div>
                </button>
        </div>
    )
}

