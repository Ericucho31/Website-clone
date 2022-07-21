import './App.css';
import Opcion from './componentes/encabezado-opcion';
import Bloque from './componentes/bloque-contenido';
import RecuadroRojo from './componentes/recuadro-rojo';

function App() {
  return (
    <div className="App">
      <div className='encabezado-contenedor'>
        <img src='https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-hero-medium-logo-light.svg'
        alt='Logo de Apex Legends'
        className='encabezado-logo'/>
        <Opcion texto={"acerca de"}/>
        <Opcion texto={"modos"}/>
        <Opcion texto={"temporadas"}/>
        <Opcion texto={"pase de batalla"}/>
        <Opcion texto={"Noticias y contenido multimedia"}/>
        <Opcion texto={"comunidad"}/>
        <Opcion texto={"competir"}/>
        <RecuadroRojo texto='descarga gratuita'/>
      </div>
      <div className=''>
        <Bloque 
        imagen='https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-hero-medium-logo-light.svg'
        texto={'Para PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch y PC a traves de Origin y Steam.'}
        recuadro1='juega ya gratis*'
        recuadro2='ver el trailer'
        principal={true}
        />
        <Bloque 
        imagen='https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-hero-medium-logo-light.svg'
        texto={'Sumérgete en el combate y protege a tus compañeros de pelotón en Salvadores. Llega Newcastle, la nueva leyenda y caballero de brillante armadura, una monstruosa actualización de Punto Tormenta, un sistema de clasificatorias modificado y mucho más.'}
        recuadro1='mas informacion'
        titulo='no dejes que nadie caiga'
        
        />
          


      </div>
    </div>
  );
}

export default App;
