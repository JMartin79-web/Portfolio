import React, {useState} from 'react'
import Divisor from '../../Divisor/Divisor'
import IlustraciónGrande from './IlustraciónGrande'


// IMÁGENES

import redraw from "../../../assets/ilustracion/redraw.jpg"
import auto from "../../../assets/ilustracion/auto.jpg"
import up_img from "../../../assets/ilustracion/up_img.jpg"
import up_gif from "../../../assets/ilustracion/up.gif"
import ilust from "../../../assets/ilustracion/ilust.jpg"
import ilust2 from "../../../assets/ilustracion/ilust2.jpg"
import punto_fuga from "../../../assets/ilustracion/punto_fuga.jpg"
import pato from "../../../assets/ilustracion/pato.jpg"
import boceto from "../../../assets/ilustracion/boceto.jpg"
import girl from "../../../assets/ilustracion/girl.jpg"

function Ilustracion() {
  const [imgGrande, setImgGrande] = useState("sin estado")
  const arrayImg = [redraw, auto, up_img, up_gif, ilust, ilust2, punto_fuga, pato, boceto,girl]

  function handleOpenImg(source){
    console.log(source.img)
    setImgGrande(source.img)
  }

  
  if(imgGrande ==="sin estado"){
    return (
      <div className='ilustracion'>
        <Divisor color="#37d38d"></Divisor>
        <div className='ilustracion-div'>
        {
          arrayImg.map((img)=>{
            return(
            <img src={img} key={img} alt={img} className="ilus-img"
              onClick={()=>{handleOpenImg({img})}}
              />)
          })
        }
        </div>
        
  
      </div>
    )
  }
  else{

    return(
      <IlustraciónGrande
        img={`${imgGrande}`}
        onClick={()=>{}} />
    )
  }
}

export default Ilustracion
