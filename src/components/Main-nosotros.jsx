import  React from 'react';
import '../cssComponents/Main-nosotros.css'
import cafepc from '../images/cafePc.jpeg'
const Main_nosotros = ()=>{
    return(
        <div className="main-nosotros">
            <div className="texto-principal">
                <div className='contenedor-textos'>
                    <div><h2>Nosotros</h2></div>
                    <div className="parrafo-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum atque aperiam, ipsam assumenda, soluta dignissimos maiores vero, laborum dicta architecto accusantium voluptas molestias nulla placeat omnis voluptate at inventore tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit? Vel, minus aperiam ex atque ut dicta cupiditate ipsum consequuntur recusandae qui sunt eligendi, pariatur laborum accusamus autem omnis assumenda!</div>
                    <div className="parrafo-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum atque aperiam, ipsam assumenda, soluta dignissimos maiores vero, laborum dicta architecto accusantium voluptas molestias nulla placeat omnis voluptate at inventore tempora.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit? Vel, minus aperiam ex atque ut dicta cupiditate ipsum consequuntur recusandae qui sunt eligendi, pariatur laborum accusamus autem omnis assumenda! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit quidem dolorem. Deleniti, quisquam alias dolorum blanditiis soluta obcaecati nulla a debitis cumque fuga expedita, explicabo qui reiciendis suscipit facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto id at incidunt, quibusdam error itaque omnis facilis voluptatem excepturi aspernatur harum rem nihil. Id corrupti officia, maxime amet nesciunt voluptate.</div>
                    <div className="img-texto-principal"><img src={cafepc} alt="" /></div>
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

export default Main_nosotros;