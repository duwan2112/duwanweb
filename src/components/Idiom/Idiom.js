import React, { useContext } from "react";
import "./Idiom.css";
import IdiomContext from "../../context/idiom/IdiomContext";
export default function Idiom() {
  const idiomContext = useContext(IdiomContext);
  const { active, activeIdiom } = idiomContext;

  const onClick = () => {
    activeIdiom();
  };

  return (
    <div className="container-idiom">
      <button
        onClick={onClick}
        className={`button-idiom ${active ? "active" : null}`}
      >
        ENG
      </button>

      <span className="separator">/</span>

      <button
        onClick={onClick}
        className={`button-idiom ${active ? null : "active"}`}
      >
        SPA
      </button>
    </div>
  );
}
