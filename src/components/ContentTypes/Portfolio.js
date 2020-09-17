import React, { useState, useContext } from "react";
import IdiomContext from "../../context/idiom/IdiomContext";
import Proyect from "../Proyect/Proyect";

export default function Portfolio() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active } = idiomContext;

  const [select, setSelect] = useState("Todo");

  const onClick = (word) => {
    setSelect(word);
  };

  const proyectsList = [
    {
      id: 10,
      category: "Mern",
      nombrei: "Kepp the Knowledge (RECOMMENDED)",
      descriptioni:
        "An Application with User Registration that saves your knowledge and stores it in a database",
      nombre: "Manten los Conocimientos (RECOMENDADA)",
      description:
        "Una Aplicacion con Registro de usuarios que guarda tus conocimientos y los almacena en una base de datos",
      url: "conocimientos",
      link: "https://conocimientos.netlify.app",
    },
    {
      id: 1,
      category: "App",
      nombrei: "Rock-Paper-Scissor",
      descriptioni: "A game application Rock-Paper-Scissor ",
      nombre: "Rock-Paper-Scissor",
      description: "Una Aplicacion del juego Piedra Papel o Tijeras ",
      url: "rock-paper-scissor",
      link: "https://duwan2112.github.io/Rock-Paper-Scissor/",
    },
    {
      id: 2,
      category: "App",
      nombrei: "Schedule-appointments",
      descriptioni: "an application to schedule appointments",
      nombre: "Agendar-citas",
      description: "Una Aplicacion para Agendar citas",
      url: "agendar",
      link: "https://agendarcita.netlify.app",
    },
    {
      id: 3,
      category: "App",
      nombrei: "Quotes",
      descriptioni: "an application that quotes insurance",
      nombre: "Cotizaciones",
      description: "Una Aplicacion que cotiza Seguros",
      url: "cotizaciones",
      link: "https://cotizaciones.netlify.app",
    },
    {
      id: 4,
      category: "App",
      nombrei: "Budget Manager",
      descriptioni: "An Application to manage a Budget",
      nombre: "Manejador de Presupuesto",
      description: "Una Aplicacion para manejar un Presupuesto",
      url: "presupuesto",
      link: "https://manejatupresupuesto.netlify.app",
    },
    {
      id: 5,
      category: "App",
      nombrei: "Password Generator",
      descriptioni: "An application that generates random passwords",
      nombre: "Generador de Contraseñas",
      description: "Una Aplicacion que genera contraseñas al azar",
      url: "contraseñas",
      link: "https://duwan2112.github.io/generadorPassword/",
    },
    {
      id: 6,
      category: "Apis",
      nombrei: "Flag Finder",
      descriptioni: "An Application to search for Flags from around the world",
      nombre: "Buscador de banderas",
      description: "Una Aplicacion para buscar Banderas de todo el mundo",
      url: "banderas",
      link: "https://duwan2112.github.io/Search-Countrys/",
    },
    {
      id: 7,
      category: "Apis",
      nombrei: "Breaking Bad Phrases",
      descriptioni: "An Application that generates random phrases",
      nombre: "Breaking Bad Frases",
      description: "Una Aplicacion que genera fraces al azar",
      url: "breakind",
      link: "https://breakindfrases.netlify.app/",
    },
    {
      id: 8,
      category: "Apis",
      nombrei: "Quote cryptocurrencies",
      descriptioni:
        "An Application that shows us information regarding a cryptocurrency",
      nombre: "Cotizar Criptomonedas",
      description:
        "Una Aplicacion que nos muestra informacion referente a una criptomoneda",
      url: "criptomoneda",
      link: "https://criptovalance.netlify.app",
    },
    {
      id: 9,
      category: "Apis",
      nombrei: "drink recipe finder",
      descriptioni: "An Application that shows us the recipes of a drink",
      nombre: "Buscador de Recetas",
      description:
        "Una Aplicacion que nos muestra las recetas de alguna bebida",
      url: "recetas",
      link: "https://duwan2112.github.io/BuscadorRecetas/",
    },
  ];

  return (
    <div className="container-content fondo-3">
      <div className="opacity-image">
        <div className="content">
          <h1>{active ? "PortFolio" : "Portafolio"}</h1>
          <hr className="hr-content" />

          <div className="container-nav">
            <button
              onClick={() => {
                onClick("Todo");
              }}
              className={`button-proyect  ${
                select === "Todo" ? "select" : null
              }`}
            >
              {active ? "ALL" : "TODO"}
            </button>
            <button
              onClick={() => {
                onClick("Apis");
              }}
              className={`button-proyect  ${
                select === "Apis" ? "select" : null
              }`}
            >
              APIS
            </button>
            <button
              onClick={() => {
                onClick("App");
              }}
              className={`button-proyect  ${
                select === "App" ? "select" : null
              }`}
            >
              APP
            </button>
            <button
              onClick={() => {
                onClick("Mern");
              }}
              className={`button-proyect  ${
                select === "Mern" ? "select" : null
              }`}
            >
              MERN
            </button>
          </div>

          <div className="container-proyects">
            {select === "App"
              ? proyectsList.map((proyectList) =>
                  proyectList.category === "App" ? (
                    <Proyect key={proyectList.id} proyect={proyectList} />
                  ) : null
                )
              : null}
            {select === "Apis"
              ? proyectsList.map((proyectList) =>
                  proyectList.category === "Apis" ? (
                    <Proyect key={proyectList.id} proyect={proyectList} />
                  ) : null
                )
              : null}
            {select === "Mern"
              ? proyectsList.map((proyectList) =>
                  proyectList.category === "Mern" ? (
                    <Proyect key={proyectList.id} proyect={proyectList} />
                  ) : null
                )
              : null}
            {select === "Todo"
              ? proyectsList.map((proyectList) => (
                  <Proyect key={proyectList.id} proyect={proyectList} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
