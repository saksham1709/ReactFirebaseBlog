import React from 'react';
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    let navigate = useNavigate()

    const SignInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((res) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true);
            navigate("/");
        })
    }

    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={SignInWithGoogle} >Sign in</button>
        </div>
    )
}

export default Login