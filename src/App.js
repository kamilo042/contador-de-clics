import './App.css';
import Boton from './componentes/boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {

  const manejarClic = () => {
    console.log('Aprietame');
  }


  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freecodecamp'/>           
      </div>
      <div className='contenedor-principal'> 
           <Boton
             texto='Aprietame'
             esBotoDeClic={true}
             manejarClic={manejarClic}  
              />
           <Boton
              texto='De nuevo'
              esBotoDeClic={false}
              manejarClic={reiniciarContador} />
        </div>
    </div>
  );
}

export default App;
