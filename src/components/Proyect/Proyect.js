import React, { useContext } from "react";
import IdiomContext from "../../context/idiom/IdiomContext";

export default function Proyect({ proyect }) {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active } = idiomContext;
  const {
    nombre,
    nombrei,
    descriptioni,
    description,
    url,
    category,
    link,
  } = proyect;
  const imagen = require(`../../img/${url}.png`);

  return (
    <div className="proyect">
      <img className="proyect-img" src={imagen} alt="" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${link}`}
        className="proyect-info"
      >
        {" "}
        <h4> {active ? `${nombrei}` : `${nombre}`} </h4>
        <h5>{active ? `Category: ${category}` : `Categoria: ${category}`}</h5>
        <p className="proyect-description">
          {active ? `${descriptioni}` : `${description}`}
        </p>
      </a>
    </div>
  );
}
