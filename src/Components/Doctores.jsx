import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import DetalleDoctor from './DetalleDoctor';

export default class Doctores extends Component {

    state = {
        doctores :[],
        idDoctor: null
    }
    buscarDoctores =() => {
        let url = Global.urlApiDoctores;
        let endpoint = "api/Doctores/DoctoresHospital/";
        let id = this.props.idhospital
        axios.get(url + endpoint + id).then((response) => {
            //console.log(response.data)
            this.setState({
                doctores : response.data
            })
        })

    }

    verDetalle = ( idDoctor) => {
        console.log(idDoctor)
        this.setState({
            idDoctor: idDoctor
        })
    }

    componentDidMount = () => {
        this.buscarDoctores()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospital != this.props.idhospital){
            this.buscarDoctores()
        }
    }

  render() {
    return (
        <div>
            <h1>Doctores del Hospital {this.props.idhospital}</h1>
            <table style={{borderRadius: "10px"}}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Nombre</th>
                        <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Especialidad</th>
                        <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Salario</th>
                        <th style={{ backgroundColor:"blanchedalmond" ,padding: "10px",border : "1px solid black"}}>Detalle</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.doctores.map((doctor, index) => {
                            return(
                            <tr key={doctor.idDoctor}>
                                <td style={{padding: "10px",border : "1px solid black"}}>Doctor {doctor.apellido}  </td>
                                <td style={{padding: "10px",border : "1px solid black"}}> {doctor.especialidad} </td>
                                <td style={{padding: "10px",border : "1px solid black"}}> {doctor.salario}€ </td>
                                <td style={{padding: "10px",border : "1px solid black"}}><button onClick={()=>this.verDetalle(doctor.idDoctor)} style={{borderRadius: "5px"}}>Ver Detalle</button></td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                this.state.idDoctor != null && (<DetalleDoctor idDoctor={this.state.idDoctor}/>)
            }
        </div>
    )
  }
}
