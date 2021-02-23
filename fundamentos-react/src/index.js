import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <strong> Olá React </strong>
const el = document.getElementById('root')

ReactDOM.render(
    <div>
        { tag }
       <br></br> <strong>Olá React !!!</strong>
       <br></br><Primeiro></Primeiro>
       <ComParametro />
    </div>,
     el
     )