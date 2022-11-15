import React from 'react'
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

  function openIlust(){
    return(
      <IlustraciónGrande
      /*onClick={a} img={b}*/
      />
    )
  }

  return (
    <div className='ilustracion'>
      <Divisor color="#37d38d"></Divisor>
      
      <div className='ilustracion-div'>
      <img src={auto} className="ilus-img auto" onClick={()=>{openIlust()}} id='auto' alt="auto" />
        <img src={redraw} className="ilus-img redraw" onClick={()=>{openIlust()}} alt="redraw" />
        <img src={up_img} className="ilus-img up_img" onClick={()=>{openIlust()}} alt="up img" />
        <img src={up_gif} className="ilus-img up_gif" onClick={()=>{openIlust()}} alt="up gif" />
        <img src={ilust} className="ilus-img ilust"onClick={()=>{openIlust()}}  alt="ilust" />
        <img src={ilust2} className="ilus-img ilust2" onClick={()=>{openIlust()}} alt="ilust2" />
        <img src={punto_fuga} className="ilus-img punto_fuga"onClick={()=>{openIlust()}}  alt="punto de fuga" />
        <img src={pato} className="ilus-img pato" onClick={()=>{openIlust()}} alt="pato" />
        <img src={boceto} className="ilus-img boceto" onClick={()=>{openIlust()}} alt="boceto" />
        <img src={girl} className="ilus-img girl" onClick={()=>{openIlust()}} alt="girl" />
      </div>
      

    </div>
  )
}

export default Ilustracion