import React from 'react'

//components
import magnifyinGlass from '../../img/lupa.png'

function Header(props) {
    return (
        <div className="row justify-content-between" style={{maxWidth: '100%'}}>
            
            <div className="row justify-content-start col-12 col-sm-12 col-md-12 col-md-7 col-xl-5">

                <div className="
                    col-3 col-md-2 col-sm-2 col-xl-2
                    bg-danger
                ">
                    {props.logo}
                </div>

                 <div className="
                    col-4 col-md-4 col-xl-4
                    row justify-content-center
                " >
                    <div href="#" className="
                        row justify-content-center
                        align-items-center 
                    ">
                        {props.linkToVehiculos}
                    </div>
                </div>
                    
                <div className="
                    col-5 col-md-4 col-xl-6
                    row justify-content-center
                ">
                    <div href="#" className="
                        row justify-content-center
                        align-items-center 
                    ">
                        {props.linkToHome}
                    </div>
                </div>
                    
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-md-12 col-xl-4
                row align-items-center
                justify-content-center
                pt-2
                pb-2">
                <div className="bg-light pt-3 pb-3 col-11 row justify-content-center" style={{borderRadius: 10}}>
                    <div className="col-2 col-sm-1 col-md-1 col-lg-1 col-xl-2">
                        <a href="#">
                            <img src={magnifyinGlass} className="img-fluid" style={{maxHeight: '50px', maxWidth: '30px'}}/>
                        </a>
                    </div>
                    <div className="col-10 row aling-items-center">
                        <input className="form-control border-white" type="text" placeholder="BUSCAR POR MODELO O VEHÍCULO"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
