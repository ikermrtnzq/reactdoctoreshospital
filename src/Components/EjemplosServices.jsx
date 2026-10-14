import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemplosServices extends Component {

    //IMPORTAMOS
    service = new ServiceEjemplo();
    state = {
        mensaje1 : "",
        mensaje2 : "",
        comics : []
    }
    loadData =() => {
        this.setState({
            mensaje1: this.service.getSaludo(),
            mensaje2 : this.service.getDia(),
            comics : this.service.getComics()
        })
    }

    componentDidMount = () => {
        this.loadData();
    }
  render() {
    return (
      <div style={{margin: "30px", display : "flex", flexDirection : "column", gap : "17px"}}>
        <h1>Ejemplos Services</h1>
        {
            <div>
                <p>{this.state.mensaje1}</p>
                <p>{this.state.mensaje2}</p>
            </div>
        }
        {
            this.state.comics.map((comic, index) => {
                return(
                    <div key={index} style={{display:"flex", flexDirection : "column"}}>
                        <h2>{comic.titulo}</h2>
                        <img src={comic.imagen} style={{width: "70px"}} alt="" />
                        <br/>
                    </div>
                )
            })
        }
      </div>
    )
  }
}
