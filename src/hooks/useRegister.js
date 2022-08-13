import { useContext } from 'react';
import { AppContext } from '../App';
import {
  REGISTER_REQUEST_FAILURE,
  REGISTER_REQUEST_INITIATE,
  REGISTER_REQUEST_SUCCESS,
} from '../store/Types/actionTypes';

const useRegister = () => {
  const store = useContext(AppContext);

  const register = async (payload) => {
    store.dispatch({ type: REGISTER_REQUEST_INITIATE });
    let allUsers = await fetch('http://localhost:3000/users', {
      method: 'GET',
    });
    allUsers = await allUsers.json();
    allUsers = allUsers.filter((user) => user.email === payload.email)[0];
    if (allUsers) {
      store.dispatch({
        type: REGISTER_REQUEST_FAILURE,
        error: 'User already register',
      });
    } else {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        store.dispatch({
          type: REGISTER_REQUEST_FAILURE,
          error: 'Error while registering',
        });
      } else {
        const allUserData = await response.json();
        store.dispatch({
          type: REGISTER_REQUEST_SUCCESS,
          payload: allUserData,
        });
      }
    }
  };
  return { register };
};
export default useRegister;
