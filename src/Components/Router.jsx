import React, { Component } from 'react'
import Menu from './Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element ={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
