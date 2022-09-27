import React from 'react'
import '../cssComponents/Main-contacto.css'

const Main_contacto = ()=>{
    return(
        <div className="main-nosotros">
        <div className="texto-principal">
        <div className='contenedor-textos'>
            <div><h2>Servicios</h2></div>
            <div className="parrafo-2"><h2>Contacto</h2>
                <form action="" method="get">
                    <label htmlFor="">Nombre</label><br></br>
                    <input className='inputs-contactos' type="text" placeholder='Ingresa tu nombre'/>
                    <label htmlFor="">Email</label><br></br>
                    <input className='inputs-contactos' type="text" placeholder='Ingresa tu nombre'/>
                    <label htmlFor="">Telefono</label><br></br>
                    <input className='inputs-contactos' type="text" placeholder='Ingresa tu nombre'/>
                    <label htmlFor="">Celular</label><br></br>
                    <input className='inputs-contactos' type="text" placeholder='Ingresa tu nombre'/>
                    <label htmlFor="">Mensaje</label><br></br>
                    <input className='inputs-contactos input-contacto-msj'  type="text"/>
                    <div id='btn-enviar'><button className='btn-contacto'>ENVIAR</button></div>
                </form>
            </div>
        </div>
    
    </div>
    <div className="texto-segundario">
      <div className="contenedor-parrafo">
        <div className='titulo-texto-segundario'><h2>Que hacemos</h2></div>
            <div className='parrafo-texto-segundario'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis totam explicabo nesciunt dolorum quis autem! Facilis quis quo minus. Expedita provident suscipit iste voluptatibus aliquam quos consectetur cumque quam fugiat.</p></div>
        </div>
    </div>
    </div>
    )
}

export default  Main_contacto;