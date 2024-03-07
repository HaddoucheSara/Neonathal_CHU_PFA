import {
    FETCH_PATIENTS_REQUEST,
    FETCH_PATIENTS_SUCCESS,
    FETCH_PATIENTS_FAILURE,
    CREATE_PATIENT_REQUEST,
    CREATE_PATIENT_SUCCESS,
    CREATE_PATIENT_FAILURE,
   
  } from './actionPatient';
  
  const initialState = {
    patients: [],
    isLoading: false,
    error: null,
    
  };
  
  const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PATIENTS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
        
      case CREATE_PATIENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PATIENTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          patients: action.payload
        };
      case FETCH_PATIENTS_FAILURE:
        return {
          ...state,
        isLoading: false,
        error: action.payload
        };
        
      case CREATE_PATIENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_PATIENT_SUCCESS:
        return {
          ...state,
          loading: false,
          patients: [...state.patients, action.payload],
        };

        case UPDATE_MATIENT_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: null
          };
        case UPDATE_MATIENT_SUCCESS:
          // Update the patients array with the updated data
          const updatedPatients = state.patients.map((patient) => {
            if (patient.id === action.payload.id) {
              return action.payload;
            }
            return patient;
          });
    
          return {
            ...state,
            patients: updatedPatients,
            isLoading: false
          };
        case UPDATE_MATIENT_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          };
      
    
      default:
        return state;
    }
  };
  
  export default patientReducer;
  