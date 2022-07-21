import React from "react";
import '../hojas-de-estilo/recuadro-rojo.css';

function RecuadroRojo ({texto}) {
    return (
        <div className="recuadro-rojo">
            {texto}
        </div>
    )

}
export default RecuadroRojo;