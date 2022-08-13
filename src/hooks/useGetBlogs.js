import { useState } from 'react';

const useGetBlogs = () => {
  const [data, setData] = useState({ loading: false, error: null });
  const getAllBlogs = async () => {
    setData((prev) => {
      return {
        ...prev,
        loading: true,
      };
    });
    const blogs = await fetch('http:localhost:3000/blogs', { method: 'GET' });
    if (!blogs.ok) {
      setData((prev) => {
        return {
          ...prev,
          loading: false,
          error: blogs.statusText,
        };
      });
    } else {
      setData((prev) => {
        return {
          ...prev,
          loading: false,
          error: null,
        };
      });
    }
  };
  return { getAllBlogs, ...data };
};
export default useGetBlogs;
