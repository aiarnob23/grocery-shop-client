import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const { eRegister, Glogin } = useContext(AuthContext);
    const  [regError,setRegError] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        console.log(name);
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setRegError('Password should be at least 6 characters');
            return;
        }
        else if(!(/[A-Z]/.test(password))){
            setRegError('Password should be at least  one upper case character');
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setRegError('Password should contain at least one special character');
            return;
        }
        setRegError('');
        eRegister(email,password)
        .then(()=>{
            updateProfile(auth.currentUser,{
                displayName:name,
            })
            .then(()=>{
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
            })
            Swal.fire({
                title: 'Success!',
                text: 'Registration is successful',
                icon: 'success',
                confirmButtonText: 'Okay'              
              })
              navigate('/');
        })
        .catch(error=>{
             setRegError(error.message);
        })
    };

    const handleGoogleRegister =e=>{
        e.preventDefault();
        Glogin()
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Registration is successful',
                icon: 'success',
                confirmButtonText: 'Okay'
                
              })
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div>
                <div className="pt-8 min-h-screen bg-green-50 text-green-600">
                    <div className="hero-content  flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl my-5 font-bold">Register Here!</h1>
                        </div>
                        <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="input input-bordered"
                                        name="name"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name="email"
                                        required />
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
                                        required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button >  <Button variant="contained" className="w-full " color="success">Register</Button></button>

                                </div>
                                <div className="text-red-500">{regError && <p>{regError}</p>}</div>
                            </form>
                            <div className="flex justify-center text-xl mb-2">
                                <h5 className="text-2xl text-gray-500">or</h5>
                            </div>
                            <div className="flex justify-center mb-4">
                                <button onClick={handleGoogleRegister} className="py-3  btn bg-[#1F4172] text-white mx-6 text-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                        <path
                                            d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                                        />
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>
                            <hr className="bg-[#938c8c] h-[1px] w-3/4 mx-auto my-2" />

                            <p className="text-center mb-4">Already have an account? <button className="text-xl font-semibold">Login</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

