import { useState } from 'react';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../../hooks/useRegister';
const Register = () => {
  const [registerState, setRegisterState] = useState({
    email: '',
    password: '',
  });
  const id = useId();
  const { register, loading, error } = useRegister();
  const submit = async (e) => {
    e.preventDefault();
    await register(registerState);
  };
  return (
    <div className="d-flex justify-content-center my-5">
      {!loading && !error && (
        <div className="card w-50 p-4">
          <form onSubmit={submit}>
            <h3>Register </h3>
            <div className="mb-3 mt-3">
              <label htmlFor={`${id}-logingId`}>Email:</label>
              <input
                type="email"
                className="form-control"
                id={`${id}-logingId`}
                placeholder="Enter email"
                name="email"
                onChange={(e) =>
                  setRegisterState((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
                value={registerState.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`${id}-loginpwd`}>Password:</label>
              <input
                type="password"
                className="form-control"
                id={`${id}-loginpwd`}
                placeholder="Enter password"
                name="pswd"
                onChange={(e) =>
                  setRegisterState((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                value={registerState.password}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <h6 className="py-2">
              Already have an account ? <Link to="/login">Login here</Link>
            </h6>
          </form>
        </div>
      )}
      {loading && <div>...loading</div>}
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};
export default Register;
