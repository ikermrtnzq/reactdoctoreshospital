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
        console.log(id)
    }
    componentDidMount = () => {
        this.buscarDoctor()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps != this.props.idDoctor) this.buscarDoctor()
    }
    render() {
    return (
      <div>
        <h1>DetalleDoctor</h1>
      </div>
    )
  }
}
