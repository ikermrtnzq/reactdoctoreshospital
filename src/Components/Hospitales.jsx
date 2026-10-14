import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import ServiceHospitales from '../services/ServiceHospitales';

export default class Hospitales extends Component {

    state={
        hospitales:[]
    }
    service = new ServiceHospitales();
    obtenerHospitales = () => {
        this.service.getHospitales2().then(result =>{
            this.setState({
                hospitales : result
            })
        })
    }

    componentDidMount = () => {
        this.obtenerHospitales();
    }
  render() {
    return (
      <div style={{margin: "30px"}}>
        <h1>HOSPITALES</h1>
        <table className="table table-warning">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Nº Camas</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return(
                            <tr key={index}>
                                <td>{hospital.idHospital}</td>
                                <td>{hospital.nombre}</td>
                                <td>{hospital.direccion}</td>
                                <td>{hospital.telefono}</td>
                                <td>{hospital.camas}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
