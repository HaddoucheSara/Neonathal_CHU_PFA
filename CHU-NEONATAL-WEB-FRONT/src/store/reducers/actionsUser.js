import axios from 'axios';
import { API_URL } from 'utils/const';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';


export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';




export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});


export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});




export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUserFailure = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    // Effectuer votre appel à l'API sans inclure le paramètre de page
    axios
      .get(' http://127.0.0.1:8000/api/users', {
        headers: {
          'Accept': 'application/ld+json',
        },
      })
      .then((response) => {
        // Une fois les données récupérées avec succès, dispatchez l'action FETCH_PATIENTS_SUCCESS avec les données reçues.
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        // En cas d'échec de la récupération des données, dispatchez l'action FETCH_PATIENTS_FAILURE avec l'erreur appropriée.
        dispatch(fetchUsersFailure(error.message));
      });
  };
};



export const createUser = (userData) => {
  return (dispatch) => {
    dispatch(createUserRequest());
    axios
      .post(`${API_URL}/api/users`, userData)
      .then((response) => {
        dispatch(createUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createUserFailure(error.message));
      });
  };
};


const updateUserRequest = () => ({ type: UPDATE_USER_REQUEST });
const updateUserSuccess = (data) => ({ type: UPDATE_USER_SUCCESS, payload: data });
const updateUserFailure = (error) => ({ type: UPDATE_USER_FAILURE, payload: error });

export const updateUser = (id, updatedData) => {
  return (dispatch) => {
    dispatch(updateUserRequest());

    axios
      .put(` http://127.0.0.1:8000/api/users/${id}`, updatedData)
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateUserFailure(error.message));
      });
  };
};