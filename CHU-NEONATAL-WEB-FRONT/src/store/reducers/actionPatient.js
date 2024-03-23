import axios from 'axios';
import { API_URL } from 'utils/const';
export const FETCH_PATIENTS_REQUEST = 'FETCH_PATIENTS_REQUEST';
export const FETCH_PATIENTS_SUCCESS = 'FETCH_PATIENTS_SUCCESS';
export const FETCH_PATIENTS_FAILURE = 'FETCH_PATIENTS_FAILURE';
export const CREATE_PATIENT_REQUEST = 'CREATE_PATIENT_REQUEST';
export const CREATE_PATIENT_SUCCESS = 'CREATE_PATIENT_SUCCESS';
export const CREATE_PATIENT_FAILURE = 'CREATE_PATIENT_FAILURE';


export const UPDATE_MATIENT_REQUEST = 'UPDATE_MATIENT_REQUEST';
export const UPDATE_MATIENT_SUCCESS = 'UPDATE_MATIENT_SUCCESS';
export const UPDATE_MATIENT_FAILURE = 'UPDATE_MATIENT_FAILURE';




export const fetchPatientsRequest = () => ({
  type: FETCH_PATIENTS_REQUEST,
});


export const fetchPatientsSuccess = (patients) => ({
  type: FETCH_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchPatientsFailure = (error) => ({
  type: FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const createPatientRequest = () => {
  return {
    type: CREATE_PATIENT_REQUEST,
  };
};

export const createPatientSuccess = (patient) => {
  return {
    type: CREATE_PATIENT_SUCCESS,
    payload: patient,
  };
};

export const createPatientFailure = (error) => {
  return {
    type: CREATE_PATIENT_FAILURE,
    payload: error,
  };
};

export const fetchPatients = () => {
  return (dispatch) => {
    dispatch(fetchPatientsRequest());
    // Effectuer votre appel à l'API sans inclure le paramètre de page
    axios
      .get(' http://127.0.0.1:8000/api/matients', {
        headers: {
          'Accept': 'application/ld+json',
        },
      })
      .then((response) => {
        // Une fois les données récupérées avec succès, dispatchez l'action FETCH_PATIENTS_SUCCESS avec les données reçues.
        dispatch(fetchPatientsSuccess(response.data));
      })
      .catch((error) => {
        // En cas d'échec de la récupération des données, dispatchez l'action FETCH_PATIENTS_FAILURE avec l'erreur appropriée.
        dispatch(fetchPatientsFailure(error.message));
      });
  };
};



export const createPatient = (patientData) => {
  return (dispatch) => {
    dispatch(createPatientRequest());
    axios
      .post(`${API_URL}/api/matients`, patientData)
      .then((response) => {
        dispatch(createPatientSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createPatientFailure(error.message));
      });
  };
};


const updateMatientRequest = () => ({ type: UPDATE_MATIENT_REQUEST });
const updateMatientSuccess = (data) => ({ type: UPDATE_MATIENT_SUCCESS, payload: data });
const updateMatientFailure = (error) => ({ type: UPDATE_MATIENT_FAILURE, payload: error });

export const updateMatient = (id, updatedData) => {
  return (dispatch) => {
    dispatch(updateMatientRequest());

    axios
      .put(` http://127.0.0.1:8000/api/matients/${id}`, updatedData)
      .then((response) => {
        dispatch(updateMatientSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateMatientFailure(error.message));
      });
  };
};

