import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// const useHistory = useNavigate();

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    let navigate = useNavigate();
    let isLogin = false;


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const signInUsingGoogle = () => {
        // console.log('ohe');
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     console.log(result.user);
        //     history.push("/login");
        // })
        // .catch((error) => {

        // })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                isLogin = false;
                setUser({});
                navigate('/login');
            })
            .catch((error) => {
                // console.log(error.message)
            });
    }
    const registerWithEmailPassword = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUserName(name);
                // navigate('/login');
            })
            .catch((error) => {
                // console.log(error.message);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // history.push('/login');
            }).catch((error) => {

            });
    }
    const loginWithEmailPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

        // signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     isLogin = true;
        //     console.log('store', result.user);
        //     setError(' ');
        //     // history.push("/home");
        //     return result;
        // })
        // .catch((error) => {
        //     isLogin ? setError(' ') : setError('Something Wrong. Please Try Again');
        // });
    }

    //observe whether user auth state changed or not.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // console.log(user)
            }
        })
    }, [auth, navigate])
    return { user, error, signInUsingGoogle, logOut, registerWithEmailPassword, loginWithEmailPassword }

}
export default useFirebase;