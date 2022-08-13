import {
  CREATE_BLOG_REQUEST_FAILURE,
  CREATE_BLOG_REQUEST_INITIATE,
  CREATE_BLOG_REQUEST_SUCCESS,
  GET_ALL_BLOG_REQUEST_FAILURE,
  GET_ALL_BLOG_REQUEST_INITIATE,
  GET_ALL_BLOG_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_INITIATE,
  LOGIN_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAILURE,
  REGISTER_REQUEST_INITIATE,
  REGISTER_REQUEST_SUCCESS,
} from './Types/actionTypes';

export const initialState = {
  userDetails: [],
  blogs: [],
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_INITIATE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userDetails: action.payload,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case REGISTER_REQUEST_INITIATE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        userDetails: action.payload,
      };
    case REGISTER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CREATE_BLOG_REQUEST_INITIATE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: action.payload,
      };
    case CREATE_BLOG_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_ALL_BLOG_REQUEST_INITIATE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        blogs: action.payload,
      };
    case GET_ALL_BLOG_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
