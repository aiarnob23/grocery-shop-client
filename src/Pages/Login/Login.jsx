

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {Glogin} = useContext(AuthContext);

    const handleLogin=()=>{
         Glogin()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>console.log(error));
    }

    return (
        <div>
            <button onClick={()=>handleLogin()}>Login via google</button>
        </div>
    );
};

export default Login;