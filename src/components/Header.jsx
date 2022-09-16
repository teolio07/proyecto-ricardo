import React from 'react'
import '../cssComponents/Header.css';
const Header = ()=> {
    return(
        <header className='Header'>
            <div className='Title-header'>Desarrollos ADSI <b id='word'>Web</b></div>
            <div className='Nav'>
                <nav>
                    <ul>
                        <li>INICIO</li>
                        <li>NOSOTROS</li>
                        <li>SERVICIOS</li>
                        <li>CONTACTO</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
