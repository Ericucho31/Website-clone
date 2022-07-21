import React from "react";
import '../hojas-de-estilo/encabezado-opcion.css';

function Opcion ({texto}) {
    return(
        <div className="opcion">
            {texto}
        </div>
    )
}

export default Opcion;