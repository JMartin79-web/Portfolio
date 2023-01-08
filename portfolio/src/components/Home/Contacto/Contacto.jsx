import React from 'react'
import ColorTxt from '../../ColorTxt/ColorTxt'
import Title from '../../Title/Title'

function Contacto() {
  return (
    <div className='contacto' id='contacto'>
        <div className='contacto-div'>
          <ColorTxt colortxt="#0b91d6" txt="contacto"></ColorTxt>
            <Title title="¿Qué puedo hacer por vos?"></Title>
            <p>Te invito a que me contactes por cualquiera de los siguientes medios</p>
            <br/>
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