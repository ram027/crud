import { useState } from 'react';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../../hooks/useLogin';
const Login = () => {
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  });
  const id = useId();
  const { login, loading, error } = useLogin();
  const submit = async (e) => {
    e.preventDefault();
    await login(loginState.email, loginState.password);
  };
  return (
    <div className="d-flex justify-content-center my-5">
      {!loading && !error && (
        <div className="card w-50 p-4">
          <form onSubmit={submit}>
            <h3>Login </h3>
            <div className="mb-3 mt-3">
              <label htmlFor={`${id}-registerEmailId`}>Email:</label>
              <input
                type="email"
                className="form-control"
                id={`${id}-registerEmailId`}
                placeholder="Enter email"
                name="email"
                value={loginState.email}
                onChange={(e) =>
                  setLoginState((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`${id}-registerPasswordId`}>Password:</label>
              <input
                type="password"
                className="form-control"
                id={`${id}-registerPasswordId`}
                placeholder="Enter password"
                name="pswd"
                onChange={(e) =>
                  setLoginState((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <h6 className="py-2">
              Don't have an account ? <Link to="/register">Register here</Link>
            </h6>
          </form>
        </div>
      )}
      {loading && <div>...loading</div>}
      {error && <div className="danger">{error}</div>}
    </div>
  );
};
export default Login;
