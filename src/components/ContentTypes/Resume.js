import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faBootstrap,
  faNodeJs,
  faJava,
  faGithub,
  faGitAlt,
  faEnvira,
  faCuttlefish,
} from "@fortawesome/free-brands-svg-icons";
import IdiomContext from "../../context/idiom/IdiomContext";
export default function Resume() {
  //Context para el idioma
  const idiomContext = useContext(IdiomContext);
  const { active } = idiomContext;

  return (
    <div className="container-content fondo-2">
      <div className="opacity-image">
        <div className="content">
          <h1>{active ? "Curriculum" : "Resumen"} </h1>
          <hr className="hr-content" />
          <div className="container-education">
            <div className="skills">
              <h2 className="title-information">
                {active ? "Skills:" : "Habilidades:"}
              </h2>
              <div className="information">
                <div className="container-informationr container-informationr-skills">
                  {" "}
                  <h3> Front-end: </h3>
                  <p className="container-skills">
                    <span className="container-icon icon-1" data-descr="Html5">
                      <FontAwesomeIcon className="icon-skill" icon={faHtml5} />
                    </span>
                    <span className="container-icon icon-2" data-descr="Css3">
                      <FontAwesomeIcon
                        className="icon-skill"
                        icon={faCss3Alt}
                      />
                    </span>
                    <span
                      className="container-icon icon-3"
                      data-descr="JavaScript"
                    >
                      <FontAwesomeIcon className="icon-skill" icon={faJs} />
                    </span>
                    <span
                      className="container-icon icon-4"
                      data-descr="React.js"
                    >
                      <FontAwesomeIcon className="icon-skill" icon={faReact} />
                    </span>
                    <span className="container-icon icon-5" data-descr="Sass">
                      <FontAwesomeIcon className="icon-skill" icon={faSass} />
                    </span>
                    <span
                      className="container-icon icon-6"
                      data-descr="Bootstrap"
                    >
                      <FontAwesomeIcon
                        className="icon-skill"
                        icon={faBootstrap}
                      />
                    </span>
                  </p>
                </div>
                <hr className="divisor" />
                <div className="container-informationr container-informationr-skills">
                  {" "}
                  <h3> Back-end: </h3>
                  <p className="container-skills">
                    <span
                      className="container-icon icon-7"
                      data-descr="Node.js"
                    >
                      <FontAwesomeIcon className="icon-skill" icon={faNodeJs} />
                    </span>
                    <span
                      className="container-icon icon-7"
                      data-descr="MongoDB"
                    >
                      <FontAwesomeIcon className="icon-skill" icon={faEnvira} />
                    </span>
                  </p>
                </div>
                <hr className="divisor" />
                <div className="container-informationr container-informationr-skills">
                  {" "}
                  <h3> {active ? "Others:" : "Otros:"} </h3>
                  <p className="container-skills">
                    <span className="container-icon icon-8" data-descr="Java">
                      <FontAwesomeIcon className="icon-skill" icon={faJava} />
                    </span>
                    <span className="container-icon icon-2" data-descr="C/C++">
                      <FontAwesomeIcon
                        className="icon-skill"
                        icon={faCuttlefish}
                      />
                    </span>
                    <span className="container-icon icon-9" data-descr="Git">
                      <FontAwesomeIcon className="icon-skill" icon={faGitAlt} />
                    </span>
                    <span
                      className="container-icon icon-10"
                      data-descr="GitHub"
                    >
                      <FontAwesomeIcon className="icon-skill" icon={faGithub} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="university">
              <h2 className="title-information">
                {active ? "University:" : "Universidad:"}
              </h2>
              <div className="information">
                <div className="container-informationr">
                  <h3> {active ? "Data Structure" : "Estructura de datos"} </h3>
                  {active ? (
                    <div className="parrafo">
                      When you make a code, in addition to solving a problem it
                      is important to keep the code in order, with good
                      practical and efficient. In order to keep these principles
                      I have knowledge such as:{" "}
                      <ul className="list-challenges">
                        <li>Comments</li>
                        <li>Keywords</li>
                        <li>Pre-Planning</li>
                        <li>code distribution</li>
                        <li>Object / Class handling</li>
                      </ul>
                      <h4 className="sub-title">some sorting methods:</h4>
                      <ul className="list-challenges">
                        <li>Blocks</li>
                        <li>Radix Sort</li>
                        <li>Method Hash</li>
                      </ul>{" "}
                    </div>
                  ) : (
                    <div className="parrafo">
                      Cuando haces un código, además de resolver un problema es
                      importante mantener el codigo ordenado, con buenas
                      practicas y eficiente. Para poder mantener estos
                      principios poseo conocimientos tales como:
                      <ul className="list-challenges">
                        <li>Comentarios</li>
                        <li>Nombres Clave</li>
                        <li>Pre-Planificacion</li>
                        <li>Distribucion del Codigo</li>
                        <li>Manejo de Objetos / Clases</li>
                      </ul>
                      <h4 className="sub-title">
                        Algunos Metodos de Ordenamiento:
                      </h4>
                      <ul className="list-challenges">
                        <li>Bloques</li>
                        <li>Radix Sort</li>
                        <li>Metodos Hash</li>
                      </ul>{" "}
                    </div>
                  )}
                </div>

                <hr className="divisor" />

                <div className="container-informationr">
                  <h3> {active ? "Algorithms:" : "Algoritmos:"} </h3>
                  {active ? (
                    <div className="parrafo">
                      When solving problems in real life you must be able to
                      combine your creativity with your knowledge theorists to
                      find a solution to the obstacle, due to to this it is
                      advisable to practice challenges where you can exercise
                      said programming logic. In my years of study (2 years) and
                      performed exercises that put in practice these logic
                      <ul className="list-challenges">
                        <li>Lychrel Numbers</li>
                        <li>Vampire Numbers</li>
                        <li>Trucatable Numbers</li>
                        <li>Capicua Numbers</li>
                        <li>Snake game</li>
                        <li>3 in a row</li>
                        <li>Bombardier</li>
                        <li>Catch the block</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="parrafo">
                      Al momento de resolver problemas en la vida real debes ser
                      capaz de combinar tu creatividad con tus conocimientos
                      teoricos para encontrar una solucion al obstaculo, debido
                      a esto es recomendable practicar retos donde puedas
                      ejercitar dicha logica de programacion. En mis años de
                      estudio (2 años ) e realizado ejercicios que ponen en
                      practica esta logicas tales como:
                      <ul className="list-challenges">
                        <li>Numeros de Lychrel</li>
                        <li>Numeros Vampiros</li>
                        <li>Numeros Trucables</li>
                        <li>Numeros Capicua</li>
                        <li>Juego de la Serpiente</li>
                        <li>3 en Raya</li>
                        <li>Bombardero</li>
                        <li>Atrapa el Bloque</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="autodidactic">
              <h2 className="title-information">
                {active ? "Autodidact:" : "Autodidacta"}
              </h2>
              <div className="information">
                <div className="container-informationr">
                  {" "}
                  <h3> Front-end: </h3>
                  {active ? (
                    <div className="parrafo">
                      Based on the 3 basic pillars of web development , study in
                      depth concepts of Html5, Css3, JavaScript and the popular
                      React.js library coming to power control them smoothly, I
                      was also able to focus on some high impact technologies
                      such as:
                      <ul className="list-challenges">
                        <li>FlexBox</li>
                        <li>Grid</li>
                        <li>Responsive Design</li>
                        <li>Animations</li>
                      </ul>
                      <h4 className="sub-title">Conocimientos en React:</h4>
                      <ul className="list-challenges">
                        <li>Hooks Basics</li>
                        <li>UseContext / UseReducer </li>
                        <li>React-Router</li>
                        <li>Styled-Components</li>
                        <li>Interseption-Observer</li>
                        <li>Requests to Apis</li>
                        <li>Protection to Routes</li>
                        <li>File Upload</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="parrafo">
                      Basandome en los 3 pilares básicos del desarrollo de la
                      web , estudie a profundida conceptos de Html5 , Css3 ,
                      JavaScript y la popular libreria React.js llegando a poder
                      controlarlos de manera fluida, también pude centrarme en
                      algunas tecnologías de gran impacto como son:
                      <ul className="list-challenges">
                        <li>FlexBox</li>
                        <li>Grid</li>
                        <li>Diseño Responsivo</li>
                        <li>Animaciones</li>
                      </ul>
                      <h4 className="sub-title">Conocimientos en React:</h4>
                      <ul className="list-challenges">
                        <li>Hooks Basicos</li>
                        <li>UseContext / UseReducer </li>
                        <li>React-Router</li>
                        <li>Styled-Components</li>
                        <li>Interseption-Observer</li>
                        <li>Peticiones a Apis</li>
                        <li>Proteccion a Rutas</li>
                        <li>Subida de Archivos</li>
                      </ul>
                    </div>
                  )}
                </div>
                <hr className="divisor" />
                <div className="container-informationr">
                  {" "}
                  <h3> Back-end: </h3>
                  {active ? (
                    <div className="parrafo">
                      On the back-end side there are different paths to take In
                      mind, initially I opted for Node.js and its great
                      development community being in my opinion more flexible
                      and understandable. I was able to develop processes such
                      as:
                      <ul className="list-challenges">
                        <li>Framework Express </li>
                        <li> CRUD handling with MongoDb</li>
                        <li>Validations with JWT</li>
                        <li>File Uploads with Cloudinary</li>
                        <li>Sistem of Registration / Login </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="parrafo">
                      En el lado del Back-end existen diferentes caminos a tomar
                      en cuenta, en un principio opte por Node.js y su gran
                      comunidad de desarrollo siendo a mi parecer mas flexible y
                      entendible. Fui capaz de desarrollar procesos tales como:
                      <ul className="list-challenges">
                        <li>Framework Express </li>
                        <li>Manejo de CRUD a MongoDb</li>
                        <li>Validaciones con JWT</li>
                        <li>Subida de archivos a Cloudinary</li>
                        <li>Sistema de Registro / Logueo </li>
                      </ul>{" "}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="proximamente">
              <h2 className="title-information">
                {active ? "Coming soon:" : "Proximamente:"}
              </h2>
              <div className="information">
                <div className="container-informationr">
                  <h3> {active ? "My next steps:" : "Mis Proximos pasos"} </h3>
                  {active ? (
                    <div className="parrafo">
                      In the world of technology we know that every day new and
                      advanced things arise, therefore it is recommended be
                      informed and constantly learning. Here some technologies
                      that I plan to study in the future near:
                      <ul className="list-challenges">
                        <li>Next.js / Gatsby </li>
                        <li>GraphQL</li>
                        <li>React Native (Mobile Apps)</li>
                      </ul>
                    </div>
                  ) : (
                    <div className="parrafo">
                      En el mundo de la tecnologia sabemos que todos los dias
                      surgen cosas novedosas y avanzadas, por ende es
                      recomendable estar informado y en un constante
                      aprendizaje. Aqui algunas tecnologias que tengo planeadas
                      estudiar en un futuro cercano:
                      <ul className="list-challenges">
                        <li>Next.js / Gatsby </li>
                        <li>GraphQL</li>
                        <li>React Native (Aplicaciones Moviles)</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" space"></div>
      </div>
    </div>
  );
}
