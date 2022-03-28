import React, { useState } from 'react'
import NavBar from './components/NavBar';
import DropMenu from './components/DropMenu';
import GlobalStyle from './globalStyles';
import InfoSection from './components/InfoSection';
import { PostData } from './data/PostData';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  // Definicion de estados para el menu de disspositivos moviles
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // funcion principal
  return (
    <>
      <GlobalStyle/>
      <NavBar toggle={toggle}/>
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <Banner slides={ PostData }/>
      <InfoSection Posts={PostData} />
      <Footer/>
    </>
  );
}

export default App;
