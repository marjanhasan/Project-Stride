import { useState } from "react";
import { Link } from "react-router-dom";
import GoggleLogins from "../components/buttons/GoggleLogins";

const Registration = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) setPasswordMatch(false);
    console.log(email, password, confirmPassword);
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  name="confirmPassword"
                  required
                />
              </div>
              {!passwordMatch && (
                <div className="my-2">
                  <p className="text-red-500">Password do not match!</p>
                </div>
              )}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"Register"}
                  className="btn btn-primary"
                />
              </div>
              <div className="mt-6">
                <GoggleLogins />
              </div>
              <div className="mt-6">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-red-500">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
