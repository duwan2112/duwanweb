import React, { useContext } from "react";
import "./AsideStyle.css";
import Seccion from "./Seccion";
import AppleIcon from "@material-ui/icons/Apple";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EmailIcon from "@material-ui/icons/Email";
import IdiomContext from "../../context/idiom/IdiomContext";
import MenuIcon from "@material-ui/icons/Menu";
export default function Aside() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { aside, activeAside } = idiomContext;

  const onClick = () => {
    activeAside();
  };
  return (
    <>
      <div className={`container-aside ${aside ? "aside" : null}`}>
        <div className="container-header">
          <AppleIcon className="header-icon" />
        </div>
        <div className="container-seccion">
          {/* Home */}
          <Seccion word="Home">
            <HomeIcon className="seccion-icon" />
          </Seccion>

          {/* About */}
          <Seccion word="About">
            <PersonIcon className="seccion-icon" />
          </Seccion>

          {/* Curriculum */}
          <Seccion word="Resume">
            <AssignmentIcon className="seccion-icon" />
          </Seccion>

          {/* Portfolio */}
          <Seccion word="Portfolio">
            <BusinessCenterIcon className="seccion-icon" />
          </Seccion>

          {/* Contact */}
          <Seccion word="Contact">
            <EmailIcon className="seccion-icon" />
          </Seccion>
        </div>
      </div>

      {/* Button collapse  responsive navbar */}
      <button onClick={onClick} className="container-collapse">
        <MenuIcon className="seccion-icon" />
      </button>
    </>
  );
}
