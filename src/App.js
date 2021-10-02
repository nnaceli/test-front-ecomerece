import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import imageLogo from './img/logo.png'
import imageArrow from './img/flecha.png'
import imageCover from './img/cover.png'

import './App.css';

//components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PurchaseInsentive from './components-list/PurchaseInsentive'
import Cover from './components-home/Cover'
import CarList from './components-list/CarList'


class App extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      items : [],
    }
  }

  
  render(){

    return(
      <div className="bg-light">
        <Router>
          <Route exact path="/" render={() => {
              return <div>
                <Cover
                  background = {imageCover}
                  logo = {<Link to="/" 
                    className="
                      text-decoration-none 
                      row justify-content-center
                    ">
                      <img src={imageLogo} className="img-fluid" style={{backgroundSize: 'cover'}}/>
                    </Link>}
                  
                  linkToVehiculos = {<Link to="/vehiculos" 
                    className="
                      text-decoration-none text-dark 
                      row justify-content-center 
                      " 
                    style={{fontWeight: 600}}>
                      VEHÍCULOS
                    </Link>}
                  
                  linkToHome = {<Link to="/" 
                    className="
                      text-decoration-none text-dark 
                      row justify-content-center 
                      " 
                    style={{fontWeight: 600}}>
                      DESCUBRI NISSAN
                    </Link>}

                  linkStore = {<Link to="/vehiculos" 
                    className="
                    text-decoration-none text-light">
                      INGRESAR A NISSAN STORE
                    </Link>}

                  arrow = {imageArrow}
                />
                <Footer/>
              </div>
            }}>
          </Route>

          <Route path="/vehiculos" render={() => {
              return <div>
                <Header
                  logo = {<Link to="/" className="text-decoration-none row justify-content-center"><img src={imageLogo} style={{backgroundSize: 'cover'}}/></Link>}
                  linkToVehiculos = {<Link to="/vehiculos" className="text-decoration-none text-dark row justify-content-center font-weight-bold" style={{fontWeight: 600}}>VEHÍCULOS</Link>}
                  linkToHome = {<Link to="/" className="text-decoration-none text-dark row justify-content-center font-weight-bold" style={{fontWeight: 600}}>DESCUBRI NISSAN</Link>}
                />
                <PurchaseInsentive/>
                <CarList
                  cars = {this.state.items}
                />
                <Footer/>
              </div>
            }}>
          </Route>
        </Router>
          
      </div>
    )

  }
}

export default App;
