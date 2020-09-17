import React, { useContext, useState, useEffect } from "react";
import "./contenedor.css";
import "../ContentTypes/ContentTypes.css";
import IdiomContext from "../../context/idiom/IdiomContext";
import About from "../ContentTypes/About";
import Contact from "../ContentTypes/Contact";
import Portfolio from "../ContentTypes/Portfolio";
import Resume from "../ContentTypes/Resume";
export default function Contenedor() {
  //Context Despliegue
  const despliegueContext = useContext(IdiomContext);
  const { despliegue, despliegueactive, desplieguename } = despliegueContext;

  //State Despliegue
  const [despliegues, setDespliegues] = useState();
  const [repit, setRepit] = useState(false);

  useEffect(() => {
    if (despliegue === "4") {
      return setDespliegues("active-repet");
    } else if (despliegue === "1") {
      return setDespliegues("active-despliegue");
    } else if (despliegue === "2") {
      setRepit(!repit);
      if (repit === true) return setDespliegues("active-despliegue-doble");
      else return setDespliegues("active-despliegue-repet");
    } else if (despliegue === "3") {
      return setDespliegues("active-despliegue-invertido");
    } else {
      return setDespliegues("null");
    }

    //eslint-disable-next-line
  }, [despliegueactive]);

  return (
    <div className={`container-contenedor ${despliegues}`}>
      {desplieguename === "About-active" ? <About /> : null}
      {desplieguename === "Resume-active" ? <Resume /> : null}
      {desplieguename === "Portfolio-active" ? <Portfolio /> : null}
      {desplieguename === "Contact-active" ? <Contact /> : null}
    </div>
  );
}
