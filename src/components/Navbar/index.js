import { Link } from 'react-router-dom';
const Navbar = () => {
  const user = null;
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Blogs
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="mynavbar"
      >
        <ul className="navbar-nav me-auto">
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {!user && (
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          )}
          {user && (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
