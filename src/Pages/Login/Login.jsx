import { Button } from "@mui/material";

import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { Glogin, eLogin } = useContext(AuthContext);
  const [logInError, setLogInError] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    setLogInError(' ');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    eLogin(email, password)
      .then((result) => console.log(result))
      .catch((error) => {
        setLogInError(error.message);
      })

  }

  const handleGoogleLogin = e => {
    e.preventDefault();
    setLogInError(' ');
    Glogin()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        setLogInError(error.message);
      });
  }

  return (
    <div>
      <div className="pt-8 min-h-screen bg-green-50 text-green-600">
        <div className="hero-content  flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl my-5 font-bold">Login Please!</h1>
          </div>
          <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button >  <Button variant="contained" className="w-full " color="success">LOGIN</Button></button>

              </div>
            </form>
            {
              logInError && (<p className="text-red-400 mx-1 text-bold text-xl text-center">{logInError}</p>)
            }
            <div className="flex justify-center text-xl mb-2">
              <h5 className="text-2xl text-gray-500">or</h5>
            </div>
            <div className="flex justify-center mb-4">
              <button onClick={handleGoogleLogin} className="py-3  btn bg-[#1F4172] text-white mx-6 text-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path
                    d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>
            <hr className="bg-[#938c8c] h-[1px] w-3/4 mx-auto my-2" />

            <p className="text-center mb-4">Don&apos;t have an account? <button className="text-xl font-semibold">Register</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;