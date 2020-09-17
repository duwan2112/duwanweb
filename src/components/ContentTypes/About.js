import React, { useContext } from "react";
import Perfil from "../../img/perfil.jpeg";
import IdiomContext from "../../context/idiom/IdiomContext";
export default function About() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active } = idiomContext;

  return (
    <div className="container-content fondo-1">
      <div className="opacity-image">
        <div className="content">
          <h1>{active ? "About Me" : "Sobre mi"} </h1>
          <hr className="hr-content" />

          <div className="container-cardname">
            <div className="cardname-image">
              {" "}
              <img src={Perfil} alt="" />{" "}
            </div>
            <div className="cardname-content">
              <h3 className="cardname-title">Duwan Peña</h3>
              <p className="cardname-age">
                {" "}
                19 {active ? "yeards old" : "años"}{" "}
              </p>
              {active ? (
                <p className="cardname-text">
                  {" "}
                  I consider myself a Junior programmer looking to become a
                  FullStack web developer and be able to show the world all my
                  potential. For a year I have been learning in a way
                  self-taught where my intention has been to learn efficiently
                  everything related to the world of the web{" "}
                </p>
              ) : (
                <p className="cardname-text">
                  Me considero un programador Junior que busca convertirse en un
                  desarrollador web FullStack y poder demostrar al mundo todo mi
                  potencial. Desde hace un año estoy aprendiendo de forma
                  autodidacta en donde mi intención ha sido poder aprender
                  eficientemente todo lo relacionado al mundo de la web{" "}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </div>
  );
}
