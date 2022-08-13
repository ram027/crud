import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [data, setData] = useState({
    loading: false,
    error: null,
    userData: null,
  });
  const navigate = useNavigate();

  const login = async (email, password) => {
    setData((prev) => {
      return { ...prev, loading: true };
    });

    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
    });

    if (!response.ok) {
      setData((prev) => {
        return {
          ...prev,
          loading: false,
          error: response.statusText,
          userData: null,
        };
      });
    } else {
      const allUsers = await response.json();
      const filteredUser = allUsers.filter(
        (user) => user.email === email && user.password === password
      );
      setData((prev) => {
        return {
          ...prev,
          loading: false,
          userData: filteredUser,
        };
      });
      navigate('/');
    }
  };
  return { login, ...data };
};
export default useLogin;
