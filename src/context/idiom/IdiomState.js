import React, { useReducer } from "react";
import IdiomContext from "./IdiomContext";
import IdiomReducer from "./IdiomReducer";
import {
  ACTIVE_IDIOM,
  ACTIVE_ASIDE,
  ACTIVE_DESPLIEGUE,
} from "../../types/index";
export default function IdiomState(props) {
  const initialState = {
    active: true, // true = English false = Spanish
    aside: false, //Aside navbar  true = desplegado false = no desplegado
    despliegue: null, //Desplegador de alguna pestaña del navbar
    despliegueactive: false,
    desplieguename: null,
  };

  const [state, dispatch] = useReducer(IdiomReducer, initialState);

  const activeIdiom = () => {
    dispatch({ type: ACTIVE_IDIOM });
  };
  const activeAside = () => {
    dispatch({ type: ACTIVE_ASIDE });
  };
  const activeDespliegue = (type) => {
    let value;
    if (type === state.desplieguename && type !== "Home-active") value = "4";
    else if (state.despliegue === null && type === "Home-active") value = null;
    else if (
      state.despliegue === null ||
      (state.despliegue === "3" && type !== "Home-active")
    )
      value = "1";
    else if (
      (state.despliegue === "1" ||
        state.despliegue === "2" ||
        state.despliegue === "4") &&
      type !== "Home-active"
    )
      value = "2";
    else value = "3";
    dispatch({ type: ACTIVE_DESPLIEGUE, payload: { value, type } });
  };
  return (
    <IdiomContext.Provider
      value={{
        active: state.active,
        activeIdiom,
        aside: state.aside,
        activeAside,
        despliegue: state.despliegue,
        despliegueactive: state.despliegueactive,
        desplieguename: state.desplieguename,
        activeDespliegue,
      }}
    >
      {props.children}
    </IdiomContext.Provider>
  );
}
