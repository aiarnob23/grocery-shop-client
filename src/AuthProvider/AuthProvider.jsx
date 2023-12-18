
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();

      // loading state
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);

    //handle google login or sign up
    const Glogin =()=>{
        setLoading(true);
       return signInWithPopup(auth,provider)
    }
    //handle register with email-pass
    const eRegister = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    //handle email-pass login
    const eLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    //handle signOut
    const logOut=()=>{
        setLoading(true);
       return signOut(auth)
    }
    //on Auth state change user handle
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>unsubscribe();
    }, [])

    const authInfo={
       Glogin,
       eRegister,
       eLogin,
       logOut,
       loading,
       user,
       
       
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