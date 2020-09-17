import React from "react";
import Aside from "./components/Aside/Aside";
import Networks from "./components/Networks/Networks";
import Header from "./components/Header/Header";
import Idiom from "./components/Idiom/Idiom";
import IdiomState from "./context/idiom/IdiomState";
import Contenedor from "./components/contenedor/Contenedor";

function App() {
  return (
    <IdiomState>
      <div className="opacity">
        <Header />
        <Aside />
        <Networks />
        <Idiom />
      </div>
      <Contenedor />
    </IdiomState>
  );
}

export default App;
