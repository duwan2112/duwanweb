import React, { useContext } from "react";
import IdiomContext from "../../context/idiom/IdiomContext";
export default function Seccion(props) {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { activeDespliegue, desplieguename, activeAside } = idiomContext;

  const onClick = () => {
    activeDespliegue(`${props.word}-active`);
    activeAside();
  };

  const name = () => {
    if (desplieguename) {
      const name = desplieguename.split("-");
      if (name[0] === props.word && props.word !== "Home")
        return "active-button-seccion";
    }
  };

  return (
    <div className="seccion">
      <button
        onClick={onClick}
        className={`button-seccion ${name()}`}
        data-descr={props.word}
      >
        {props.children}
      </button>
    </div>
  );
}
