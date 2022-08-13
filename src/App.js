import React from 'react';
import { useReducer } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import CreateBlog from './components/blogs/create-blog';
import Dashboard from './components/blogs/dashboard';
import Navbar from './components/Navbar';
import { initialState, reducer } from './store/Reducer';

export const AppContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route
              path="/home"
              element={
                state.userDetails.length ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/create"
              element={
                state.userDetails.length ? (
                  <CreateBlog />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !state.userDetails.length ? <Login /> : <Navigate to="/" />
              }
            />
            <Route
              path="/register"
              element={
                !state.userDetails.length ? <Register /> : <Navigate to="/" />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
