import React from 'react'

import CoverInformation from './CoverInformation'
import Header from '../components/Header/Header'
import background from '../img/cover.png'

export default function Cover(props) {
    return (
        <div className="row justify-content-center pb-5" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Header
                logo = {props.logo}
                linkToVehiculos = {props.linkToVehiculos}
                linkToHome = {props.linkToHome}
            />
            <CoverInformation
                linkStore = {props.linkStore}
                arrow = {props.arrow}
            />
        </div>
    )
}
