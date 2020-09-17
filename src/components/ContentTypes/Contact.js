import React, { useState, useContext } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IdiomContext from "../../context/idiom/IdiomContext";

export default function Contact() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active } = idiomContext;

  const [alerta, setAlerta] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const onChange = (e) => {
    return setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      return setAlerta("Error, Porfavor Rellena todos los campos");
    }
    setAlerta(null);
  };

  return (
    <div className="container-content fondo-4 ">
      <div className="opacity-image">
        <div className="content">
          <h1>{active ? "Contact" : "Contacto"}</h1>
          <hr className="hr-content" />

          <div className="container-information">
            <div className="container-data">
              <InstagramIcon className="icon-data" />
              <span>
                {" "}
                <a
                  className="instagram"
                  href="https://www.instagram.com/bugsites/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  @BugSites{" "}
                </a>
              </span>
              <p> Instagram </p>
            </div>
            <div className="container-data">
              {" "}
              <MailOutlineIcon className="icon-data" />
              <span> duwancontacto@gmail.com </span>
              <p> Email </p>
            </div>
            <div className="container-data">
              <LocationOnIcon className="icon-data" />
              <span> Venezuela / Tachira </span>
              <p> Location </p>
            </div>
          </div>

          <form className="form-contact" onSubmit={onSubmit}>
            <div className="container-inputs">
              <input
                onChange={onChange}
                value={form.nombre}
                className="input-contact"
                type="text"
                placeholder={`${active ? "Your Name*" : "Tu Nombre"}`}
                name="nombre"
              />
              <input
                onChange={onChange}
                value={form.email}
                className="input-contact"
                type="email"
                placeholder={`${active ? "Your Email*" : "Tu Correo"}`}
                name="email"
              />
            </div>
            <textarea
              onChange={onChange}
              value={form.mensaje}
              className="textarea-contact"
              name="mensaje"
              placeholder={`${
                active ? "What is your message" : "Cual es tu mensaje"
              }`}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              className="input-submit"
              value={`${active ? "Contact Me !!" : "Contactame !!"}`}
            />
            {alerta !== null ? (
              <div className="alerta-error"> {alerta} </div>
            ) : null}
          </form>

          <div className="space"> </div>
        </div>
      </div>
    </div>
  );
}
