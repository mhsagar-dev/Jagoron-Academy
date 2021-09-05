import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router-dom';
import { LoggedContext } from '../../App';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(LoggedContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig); 
     }

    const handleLogin = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className="container">
            <div className='text-center'>
                <button onClick={handleLogin} className='btn btn-danger mt-5 rounded'>  Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;