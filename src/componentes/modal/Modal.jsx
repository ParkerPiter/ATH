import React from 'react'
import modalToken from "./modalEnBlanco.jpg"
import './modal.css'
function Medal({messageM, token}) {
  return (
    <div className='containerModal'>
        <img className="modal" src={modalToken} alt=""/>
        <p className='messageM'>{messageM}</p>
        <p className='token'>{token}</p>
    </div>
  )
}

export default Medal