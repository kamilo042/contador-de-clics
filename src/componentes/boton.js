import React from 'react';

function Boton({ texto, esBotoDeClic, manejarClic }) {
    return (
        <button
           className={esBotoDeClic ? 'boton-clic' : 'boton-reiniciar'}
           onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;