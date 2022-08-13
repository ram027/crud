import { useState } from 'react';

const useCreateBlog = () => {
  const [data, setData] = useState({ loading: false, error: null });
  const createBlog = async (blog) => {
    setData((prev) => {
      return { ...prev, loading: true };
    });

    const response = await fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    if (!response.ok) {
      setData((prev) => {
        return { ...prev, loading: false, error: response.statusText };
      });
    } else {
      // dispatch an action
      setData((prev) => {
        return { ...prev, loading: false };
      });
    }
  };
  return { createBlog, ...data };
};
export default useCreateBlog;
