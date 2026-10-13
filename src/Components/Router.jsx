import React, { Component } from 'react'
import Menu from './Menu'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import Doctores from './Doctores';

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
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
