import React from 'react'

import ContactInformation from './ContactInformation'

function Footer(props) {
    return (
        <div className="bg-black row justify-content-center pt-4 pb-2">
            <h4 className="text-white col-10"> <span>Nissan.</span><span style={{fontWeight: 350}}> Inovation that excites.</span></h4>
            <div className="col-10">
                <ContactInformation/>
            </div>
        </div>
    )
}

export default Footer