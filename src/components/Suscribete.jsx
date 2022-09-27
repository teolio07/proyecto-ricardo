import React from 'react';
import '../cssComponents/Suscribete.css'

const Suscribete = ()=>{
    return(
        <div className='container-suscribete'>
            <div className="caja-texto-suscribete"><h2>Suscribete a nuestro boletin</h2></div>
            <div className='input-email'>
                <input className='input' type="text" placeholder='Ingresa el Email..' />
                <button className='button-input'>Suscribete</button>
                
            </div>
        </div>
    )
}

export default Suscribete;


