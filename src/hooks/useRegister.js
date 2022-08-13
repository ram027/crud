import { useState } from 'react';

const useRegister = () => {
  const [data, setData] = useState({
    loading: false,
    error: null,
    userData: null,
  });
  const register = async (payload) => {
    setData((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    let allUsers = await fetch('http://localhost:3000/users', {
      method: 'GET',
    });
    allUsers = await allUsers.json();
    allUsers = allUsers.filter((user) => user.email === payload.email)[0];
    if (allUsers) {
      setData((prev) => {
        return { ...prev, loading: false, error: 'User already present' };
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
        setData((prev) => {
          return { ...prev, isLoading: false, error: response.statusText };
        });
      } else {
        const allUserData = await response.json();
        setData((prev) => {
          return { ...prev, isLoading: false, userData: allUserData };
        });
      }
    }
  };
  return { register, ...data };
};
export default useRegister;
