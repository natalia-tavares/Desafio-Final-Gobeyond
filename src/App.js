
import React from 'react';
import  Header  from './components/Header'; 
import  Main  from './components/Main'; 
import  Footer  from './components/Footer'; 
import ImagesProvider from './context';

function App() {
  return (
    <ImagesProvider> 
      <Header /> 
    <Main />
     <Footer /> 
     </ImagesProvider> 
  );
}

export default App;
