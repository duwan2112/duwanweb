import React, { useContext } from "react";
import "./HeaderStyle.css";
import IdiomContext from "../../context/idiom/IdiomContext";
export default function Header() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active, despliegue } = idiomContext;

  return (
    <div
      className={`container-title ${
        despliegue !== null && despliegue !== "3" ? "active-blur" : null
      } `}
    >
      <p className="title">Duwan Peña</p>
      <p className="description">
        {active ? "Development FullStack." : "Desarrollador web FullStack."}
      </p>
    </div>
  );
}
