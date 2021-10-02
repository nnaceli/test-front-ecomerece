import React from 'react'
import './list.css'

import car from '../img/auto.jpg'
import redArrow from '../img/red-arrow.png'

function CarCard(props) {
    return (
        <div>
                <div className="row justify-content-center">
                    <img src={props.image}/>
                </div>
                <h2 className="row justify-content-center pt-1 pb-1" style={{fontWeight: 550, fontFamily: 'sans-serif', color: '#232b2b'}}>
                    {props.name}
                </h2>
                <div className="row justify-content-between pt-4 pb-4 border-top border-bottom">
                    <div style={{maxWidth: 150, fontWeight: 600, color:'#bababa'}}>PRECIO DESDE</div>
                    <div className="text-black-50" style={{maxWidth: 120, fontWeight: 750}}>US${props.amount}</div>
                </div>
                <div className="row justify-content-between pt-2 pb-2">
                    
                    <div style={{maxWidth: 250, fontWeight: 600}}>
                        <a href="#" className="text-decoration-none text-danger">
                            VER DETALLES DEL MODELO
                        </a>
                    </div>
                    
                    <div style={{maxWidth: 75}}>
                        <a href="#">
                            <img src={redArrow} className="img-fluid" style={{maxWidth: 15}}/>
                        </a>
                    </div>
                    
                </div>
                <div style={{color:'#bababa', textAlign: 'justify'}}>
                    Imágenes meramente ilustrativas no representando la realidad exacta, pudiendo existir variaciones en la percepción.
                </div>
        </div>
    )
}

export default CarCard

