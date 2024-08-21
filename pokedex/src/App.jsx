import React from 'react';
import Title from './components/myComponents/Title';
import Description from './components/myComponents/Description';
import Pokemon from './components/myComponents/Pokemon';
import Nav from './components/nav/NavBar';
import Footer from './components/footer/Footer'; // Adicionado Footer

function App() {
  return (
    <div>
      <Nav />  {/* Barra de navegação */}
      
      <Title>POKEDEX</Title>
      
      <Description>
        Encontre os melhores Pokémons aqui!
      </Description>
      
      <Pokemon /> {/* Componente que exibe os Pokémons */}
      
      <Footer /> {/* Footer com informações da Pokédex */}
    </div>
  );
}

export default App;
