import axios from "axios";

export const GET_FAVS_FROM_LS = "GET_FAVS_FROM_LS";
export const FAV_ADD = "FAV_ADD";
export const FAV_REMOVE = "FAV_REMOVE";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";
export const DELETE_FAVS = "DELETE_FAVS";

export const getFavsFromLocalStorage = () => {
  return { type: GET_FAVS_FROM_LS };
};

export const addFav = (info) => {
  return { type: FAV_ADD, payload: info };
};

export const removeFav = (id) => {
  return { type: FAV_REMOVE, payload: id };
};

export const fetchAnother = () => (dispatch) => {
  dispatch({ type: FETCH_LOADING });
  axios
    .get("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.warn(err.response.message);
      dispatch({ type: FETCH_ERROR, payload: console.error.message });
    });
};
