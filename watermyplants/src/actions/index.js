import axiosWithAuth from "../utils/axiosWithAuth";

export const LOADING_PLANTS = "LOADING_PLANTS";
export const PLANT_SUCCESS = "PLANT_SUCCESS";
export const PLANT_FAIL = "PLANT_FAIL";
export const EDIT_PLANT = "EDIT_PLANT";
export const ADD_PLANT = "ADD_PLANT";

export const LOADING_USER = "LOADING_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAIL = "USER_FAIL";

export const getPlants = () => (dispatch) => {
  dispatch({ type: LOADING_PLANTS });

  axiosWithAuth()
    .get("/plants")
    .then((res) => {
      dispatch({ type: PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};

export const getUser = () => (dispatch) => {
  dispatch({ type: LOADING_USER });

  axiosWithAuth()
    .get("/user:id")
    .then((res) => {
      dispatch({ type: USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_FAIL, payload: { err } });
    });
};

export const editPlant = (plant) => (dispatch) => {
  axiosWithAuth()
    .put("/plants/id", plant)
    .then((res) => {
      dispatch({ type: EDIT_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};

export const addPlant = (plant) => (dispatch) => {
  axiosWithAuth()
    .post("/plants/add", plant)
    .then((res) => {
      dispatch({ type: ADD_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PLANT_FAIL, payload: { err } });
    });
};
