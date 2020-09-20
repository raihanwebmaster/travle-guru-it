import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useState({
        isSingedIn: false,
        isGoogle: false,
        isFacebook: false,
        name: '',
        email: '',
        photo: '',
    })

    // const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const googleprovider = new firebase.auth.GoogleAuthProvider();
    const fbprovider = new firebase.auth.FacebookAuthProvider();
    const handleSignIn = (provider) => {
        let authprovider;
        if (provider === "google") {
            authprovider = googleprovider;
            setUser({ ...user, isGoogle: true, })
        } else {
            authprovider = fbprovider;
            setUser({ ...user, isFacebook: true, })
        }
        firebase.auth().signInWithPopup(authprovider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const SingedInUser = {
                    isSingedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                }
                setUser(SingedInUser);
                // setLoggedInUser(SingedInUser);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const singedOutUser = {
                    isSingedIn: false,
                    name: '',
                    email: '',
                    photoURL: '',
                }
                setUser(singedOutUser);
                // Sign-out successful.
            }).catch(function (error) {
                // An error happened.
            });
    }

    const button = () => {
        // if (user.isSingedIn) {
            if (!user.isFacebook && !user.isGoogle) {
                return(<><button onClick={() => handleSignIn("facebook")} className="btn btn-secondary">
                <span>
                    <img src={require("../../website-designer/Icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
                </span>
                <span>Continue with Facebook</span>
            </button>
            <button onClick={() => handleSignIn("google")} className="btn btn-secondary">
            <span>
                <img src={require("../../website-designer/Icon/google.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
            </span>
            <span> Continue with Google</span>
        </button></>
            )
            }
            else if (user.isGoogle) {
                return (<button onClick={() => handleSignIn("facebook")} className="btn btn-secondary">
                    <span>
                        <img src={require("../../website-designer/Icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
                    </span>
                    <span>Continue with Facebook</span>
                </button>)
            }
            else if (user.isFacebook) {
                return (<button onClick={() => handleSignIn("google")} className="btn btn-secondary">
                    <span>
                        <img src={require("../../website-designer/Icon/google.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
                    </span>
                    <span> Continue with Google</span>
                </button>)
            }
        // }
    }
    return (

        <div className="tg-thirdparty-login">
            {
                button()
            }




            {/* {
                    user.isSingedIn && <p>{user.name}</p>
                } */}



        </div>
    );
};

export default Login;