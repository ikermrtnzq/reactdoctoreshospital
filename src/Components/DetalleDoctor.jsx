import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class DetalleDoctor extends Component {
    state = {
        doctor :[]
    }

    buscarDoctor = () => {
        let url = Global.urlApiDoctores;
        let endpoint = "api/Doctores/";
        let id = this.props.idDoctor
        //console.log(id)
        axios.get(url+endpoint+id).then((response) =>{
          console.log(response.data)
          this.setState({
            doctor : response.data
          })
        })
    }
    componentDidMount = () => {
        this.buscarDoctor()
    }

    componentDidUpdate = (oldProps) => {
      if(oldProps.idDoctor !== this.props.idDoctor) this.buscarDoctor()
    }
    render() {
    return (
      <div>
        <h1>Detalle del Doctor {this.state.doctor.apellido}</h1>
        <h3>ID: {this.state.doctor.idDoctor}</h3>
        <h3>Pertenece al hospital con id {this.state.doctor.idHospital}</h3>
        <h3>Percibe un salario de {this.state.doctor.salario} €</h3>
      </div>
    )
  }
}
