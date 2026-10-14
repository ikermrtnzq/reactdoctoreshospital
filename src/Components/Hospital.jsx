import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default class Hospital extends Component {

    state = {
        hospital : {},
        mensaje: "",
        status : false
    }


    inputID= React.createRef();
    inputNombre= React.createRef();
    inputDireccion= React.createRef();
    inputTlfno= React.createRef();
    inputCamas= React.createRef();

    url = Global.urlApiHospitales;
    guardarDatos = (event) => {
        event.preventDefault();
        let endpoint = "api/hospitales"
        let hospital =  {
            idHospital: parseInt(this.inputID.current.value),
            nombre: this.inputNombre.current.value,
            direccion: this.inputDireccion.current.value,
            telefono: this.inputTlfno.current.value,
            camas: parseInt(this.inputCamas.current.value)
        }

        axios.post(this.url + endpoint, hospital).then((response) => {
            console.log("insertado")
            this.setState({
                mensaje: "Creado"
            })
            this.setState({
                status: true
            })
        })



        
    }

  render() {
    return (
      <div style={{margin: "30px"}}>
        <h1>Hospital</h1>
        {
            this.state.status == true && (<Navigate to="/hospitales"/>)
        }
        <form style={{display:"flex", flexDirection: "column",  width: "fit-content"}}>
            <label>Introduzca el ID:</label>
            <input ref={this.inputID} type="number" /><br/>
            <label>Introduzca el nombre:</label>
            <input ref={this.inputNombre} type="text" /><br/>
            <label>Introduzca la direccion:</label>
            <input ref={this.inputDireccion} type="text" /><br/>
            <label>Introduzca el telefono:</label>
            <input ref={this.inputTlfno} type="text" /><br/>
            <label>Introduzca el numero de camas:</label>
            <input ref={this.inputCamas} type="number" /><br/>
            <p>{this.state.mensaje}</p>
            <button style={{borderRadius: "5px", backgroundColor:"blanchedalmond", border:"1px solid blanchedalmond"}} onClick={this.guardarDatos}>GUARDAR</button>
        </form>
      </div>
    )
  }
}
