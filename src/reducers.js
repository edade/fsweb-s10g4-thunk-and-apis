import {
  FAV_ADD,
  FAV_REMOVE,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
  GET_FAVS_FROM_LS,
  DELETE_FAVS,
} from "./actions";
import { toast } from "react-toastify";

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

function deleteFavsFromLocalStorage(state) {
  localStorage.removeItem("s10g4");
}
const initial = {
  favs: [],
  current: null,
  error: null,
  loading: true,
};

export function myReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const updatedFavState = {
        ...state,
        favs: [...state.favs, action.payload],
      };
      writeFavsToLocalStorage(updatedFavState);
      return updatedFavState;

    case FAV_REMOVE:
      const remainingFavs = state.favs.filter(
        (item) => item.id !== action.payload
      );
      const remainingFavState = { ...state, favs: remainingFavs };
      writeFavsToLocalStorage(remainingFavState);
      return remainingFavState;

    case FETCH_SUCCESS:
      return { ...state, loading: false, current: action.payload, error: null };

    case FETCH_LOADING:
      return { ...state, loading: true, current: null };

    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload, current: null };

    case GET_FAVS_FROM_LS:
      const favFromLs = readFavsFromLocalStorage();
      if (favFromLs) {
        return { ...state, favs: favFromLs };
      }
      return { ...state };
    case DELETE_FAVS:
      deleteFavsFromLocalStorage();
      return { ...state, favs: initial.favs };

    default:
      return state;
  }
}
