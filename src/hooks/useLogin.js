import { useContext } from 'react';
import { AppContext } from '../App';
import {
  LOGIN_REQUEST_FAILURE,
  LOGIN_REQUEST_INITIATE,
  LOGIN_REQUEST_SUCCESS,
} from '../store/Types/actionTypes';

const useLogin = () => {
  const store = useContext(AppContext);

  const login = async (email, password) => {
    store.dispatch({ type: LOGIN_REQUEST_INITIATE });

    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
    });

    if (!response.ok) {
      store.dispatch({ type: LOGIN_REQUEST_FAILURE });
    } else {
      const allUsers = await response.json();
      const filteredUser = allUsers.filter(
        (user) => user.email === email && user.password === password
      );
      store.dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: filteredUser });
    }
  };
  return { login };
};
export default useLogin;
