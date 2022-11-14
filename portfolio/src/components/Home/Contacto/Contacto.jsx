import React from 'react'
import Title from '../../Title/Title'

function Contacto() {
  return (
    <div className='contacto' id='contacto'>
        <div className='contacto-div'>
            <Title title="Contactame"></Title>
            <div className='contacto-info'>
                <div className="contacto-contactos">
                <div className='contacto-red-social'><a href='https://api.whatsapp.com/send/?phone=541121902602&text&app_absent=0' target="blank">icono - Whatsapp</a></div>
                <div className='contacto-red-social'><a href='https://www.linkedin.com/in/martin-aguirre-a9a047198' target="blank">icono - LinkedIn</a></div>
                <div className='contacto-red-social'><a href="mailto:jmartinaguirre79@gmail.com">icono - mail</a></div>
                </div>    
                
                <div className="contacto-foto">
                    asdfasdadsfasf
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contacto