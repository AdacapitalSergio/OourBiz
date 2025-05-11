import React, { useState } from 'react'
import './head.css'
import Logo from '../../assets/Log.png'

export const Head = () => {

    const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className='cabecalho'>
        <div className="componentes">
            
            <img className='logtipo' src={Logo} alt="" />
            <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
            ☰
            </button>
            <ul  className={`links ${menuAberto ? 'ativo' : ''}`}>
            <button className="fechar-menu" onClick={() => setMenuAberto(false)}>✖</button>
                <li ><a>Serviços</a></li>
                <li><a>Planos</a></li>
                <li><a>Quem somos</a></li>
                <li className='btn-link link1'><a>Contactar</a></li>
                <li className='btn-link link2'><a>Login</a></li>
                
            </ul>
        </div>

    </div>
  )
}
