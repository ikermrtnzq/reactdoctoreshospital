import React, { Component } from 'react'
import Menu from './Menu'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import Doctores from './Doctores';
import Hospital from './Hospital';
import Hospitales from './Hospitales';
import EjemplosServices from './EjemplosServices';

export default class Router extends Component {
  render() {
    function DoctoresElement() {
    
        let {idhospital} = useParams();
        return(<Doctores idhospital={idhospital}/>)
    }
    return (
      <div>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element ={<Home/>}></Route>
                <Route path='/doctores/:idhospital' element ={<DoctoresElement/>}></Route>
                <Route path='/hospital' element ={<Hospital/>}></Route>
                <Route path='/hospitales' element ={<Hospitales/>}></Route>
                <Route path='/services' element ={<EjemplosServices/>}></Route>

            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
