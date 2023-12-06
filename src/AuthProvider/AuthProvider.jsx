
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    //handle google login or sign up
    const Glogin =()=>{
        signInWithPopup(auth,provider)
    }

    const authInfo={
       Glogin,
       
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
     children: PropTypes.node.isRequired,
}

export default AuthProvider;