
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    //handle google login or sign up
    const Glogin =()=>{
       return signInWithPopup(auth,provider)
    }
    //handle register with email-pass
    const eRegister = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    //handle email-pass login
    const eLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //handle signOut
    const logOut=()=>{
       return signOut(auth)
    }

    const authInfo={
       Glogin,
       eRegister,
       eLogin,
       logOut,
       
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