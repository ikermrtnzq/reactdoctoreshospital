import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class Menu extends Component {
  state = {
    hospitales :[]
  }

  obtenerHospitales =() => {
      let url = Global.urlApiHospitales;
      let endpoint = "api/hospitales"
      axios.get(url + endpoint).then((response) => {
        //console.log(response.data)
          this.setState({
            hospitales : response.data
          })
      })

      
  }

  componentDidMount = () => {
    this.obtenerHospitales()
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink style={{textDecoration : "none", color : "black"}} to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink style={{textDecoration : "none", color : "black"}} to="/doctores/22">Doctores</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hospitales
                      </a>
                      <ul className="dropdown-menu">
                        {
                          this.state.hospitales.map((hospital, index) => {
                            return(<NavLink className="dropdown-item" to={"/doctores/"+hospital.idHospital}>{hospital.nombre}</NavLink>)
                          })
                        }
                      </ul>
                  </li>
                </ul>
            </div>
          </div>
      </nav>
    )
  }
}
