import {
  ACTIVE_IDIOM,
  ACTIVE_ASIDE,
  ACTIVE_DESPLIEGUE,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case ACTIVE_IDIOM:
      return {
        ...state,
        active: !state.active,
      };

    case ACTIVE_ASIDE:
      return {
        ...state,
        aside: !state.aside,
      };
    case ACTIVE_DESPLIEGUE:
      return {
        ...state,
        despliegue: action.payload.value,
        despliegueactive: !state.despliegueactive,
        desplieguename: action.payload.type,
      };
    default:
      return state;
  }
};
