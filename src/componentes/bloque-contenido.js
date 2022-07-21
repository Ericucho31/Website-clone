import React, { useState } from "react";
import RecuadroRojo from "./recuadro-rojo";
import '../hojas-de-estilo/bloque-contenido.css';

function Bloque ({imagen , texto, recuadro1, recuadro2, principal, titulo}) {

  return(
      <div className={principal ? "bloque-contenedor-principal": "bloque-contenedor-secundario"}>
          <div className="bloque-contenido">
            { principal ? <img src={imagen} className="logo-apex"/> : ""}
            { principal ? <h2>{texto}</h2> :<h1>{titulo}</h1>}
            { principal ? '' :<h3>{texto}</h3>}
                  <div className="bloque-recuadros">
                   <RecuadroRojo texto={recuadro1}/>
                    { principal ? <RecuadroRojo texto={recuadro2}/> : ""}
                  </div>
            </div>
      </div>
  )
}

export default Bloque;