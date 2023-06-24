import './App.css';
import Header from './components/sections/header';

import PagePrincipal from './components/sections/main/pages/Home'
import Productos from './components/sections/main/pages/Productos';
import Nosotros from './components/sections/main/pages/Nosotros';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import AlgoMas from './components/sections/main/pages/AlgoMas';
import Contacto from './components/sections/main/pages/Contacto';
import { useState } from 'react';
import Nav from './components/sections/header/components/Nav';



function App() {

  const [isHome, setIsHome] = useState(true);

  /*  let imageBack = "";
   if (isHome) {
     imageBack = 'fondo-de-img';
   }; */

  console.log(isHome)

  return (
    <div className={isHome ? 'fondo-de-img height' : ''} >
      <header>
        <Nav setIsHome={setIsHome} />
      </header>
      <main className='main'>
        <Outlet />

      </main>
    </div>
  );

}

export default App;
