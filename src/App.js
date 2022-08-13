import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import CreateBlog from './components/blogs/create-blog';
import Dashboard from './components/blogs/dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const user = null;
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route
            path="/home"
            element={user ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/create"
            element={user ? <CreateBlog /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
