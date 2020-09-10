import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {LoginComponent} from './components/Login'
import {RegisterComponent} from './components/Register'

const App = ()=>{
    const companyName = "PEGA"
    return <div><Header title={companyName}/><LoginComponent/><RegisterComponent/></div>

}

export default App