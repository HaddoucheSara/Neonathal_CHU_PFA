import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
   
  } from './actionsUser';
  
  const initialState = {
    users: [],
    isLoading: false,
    error: null,
    
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
        
      case CREATE_USER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: action.payload
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
        isLoading: false,
        error: action.payload
        };
        
      case CREATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          users: [...state.users, action.payload],
        };

        case UPDATE_USER_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: null
          };
        case UPDATE_USER_SUCCESS:
          const updatedUsers = state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload;
            }
            return user;
          });
    
          return {
            ...state,
            users: updatedUsers,
            isLoading: false
          };
        case UPDATE_USER_FAILURE:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          };
      
    
      default:
        return state;
    }
  };
  
  export default userReducer;
  