import React from 'react';
import '../cssComponents/Main.css'
import pc from '../images/pc.jpeg'
const Main = ()=>{
    return (
        <div className='container-main'>
            <div className='image-main'>
                <img src={pc} alt='pc'/>
            </div>
            <div className='caja-textos'>
                <h2>Expertos en Desarrollo Web</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloremque enim ad, quo mollitia hic illo dolores explicabo officia voluptas recusandae sint qui saepe consequatur numquam unde error eaque ab.</p>
            
            </div>
            <div></div>
        </div>
    )
}

export default Main