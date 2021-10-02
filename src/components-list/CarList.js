import React, { Component } from 'react'

//components
import CarCard from './CarCard'  


export default class CarList extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
            items : [],
        }
    }
    
    async componentDidMount() {
        let psw = {Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456"};
        let res = await fetch('https://4my1q6hsyo.api.quickmocker.com/product', psw);
        let data = await res.json();
        this.setState({items: data.results});
        console.log(data);
    }



    render() {

        return (
            <div className="row justify-content-center pt-4 pb-5 bg-white" style={{minHeight: 500}}>        
                <div className="row justify-content-around col-10">
                    {
                        this.state.items.map((auto,index) => {
                            const imgSrc = `https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${auto.gallery[1].medium}`
                            return (
                            <div className="mt-5 p-2 col-12 col-sm-8 col-md-5 col-lg-4" key={`item-${index}`}>
                                <CarCard
                                    name={auto.model}
                                    amount={auto.amount}
                                    image={imgSrc}
                                />
                            </div>
                            )
                        })
                    }
                </div>
                <div className="row justify-content-center pt-5">
                    <p className="col-10" style={{color:'#bababa'}}>
                        *Los precios expuestos es este catalogo son expresados en dolares americanos. Los mismos incluyen IVA y podrian variar en funcion
                        al modelo y/o versiones elegida. El precio por unidad reflejado en este catalogo refiere a la unidad de version mas economica de cada modelo.
                        RALITOR SA se reserva los derechos de modificar y actualizar los mismos en cada cualquier momento. Es responsabilidad del cliente confirmar al
                        momento de su compra, el precio final que aparece en el catalogo. No se incluyen gastos de empadronamiento ni cualquier tipo de costo municipal,
                        asi como tampoco gastos de traslados, fletes o seguro del vehiculo. No incluye costos de instalacion de accesorios.
                    </p>
                </div>
            </div>
        )
    }
}


