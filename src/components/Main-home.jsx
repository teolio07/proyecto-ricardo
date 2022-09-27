import React from 'react';
import '../cssComponents/Main-home.css';
import pc from '../images/pc.jpeg';
import logoHtml from '../images/logoHtml.jpeg';
import logoCss from '../images/logoCss.jpeg';
import grafico from '../images/grafico.jpeg';



import Suscribete from './Suscribete';
const Main_home = ()=>{
    return (
        <div className='container-main'>
            <div className='image-main'>
                <img src={pc} alt='pc'/>
            </div>
            <div className='caja-textos'>
                <h2>Expertos en Desarrollo Web</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloremque enim ad, quo mollitia hic illo dolores explicabo officia voluptas recusandae sint qui saepe consequatur numquam unde error eaque ab.</p>           
            </div>
            <Suscribete/>
            <div className='cajas-tecnologias-main'>
                
                <div className="caja-tecnologia">
                    <img src={logoHtml} alt="" />
                    <h2>HTML5</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae et non, aut necessitatibus magnam quia cupiditate, veniam maiores enim voluptates, laborum suscipit ipsam aliquid iusto! Aut porro voluptatibus facilis?</p>
                </div>
                <div className="caja-tecnologia">
                <img src={logoCss} alt="" />
                    <h2>CSS3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem corrupti iure, possimus ipsum nostrum recusandae repudiandae soluta ea sed, natus sequi id consectetur et voluptatibus amet vel? Fugit, iusto similique?</p>
                </div>
                <div className="caja-tecnologia">
                <img src={grafico} alt="" />
                    <h2>Diseno Grafico</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo quis nobis exercitationem consequuntur doloremque quo fugit, illum excepturi similique aut placeat quibusdam perferendis at repellendus delectus earum </p>
                </div>
            </div>
        </div>
    )
}

export default Main_home;