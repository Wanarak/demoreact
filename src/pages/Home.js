import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Home () {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setPasswords] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const handleEmail = (e) => {
        setemail(e.target.value);
    };
    const handlePassword = (p) => {
        setPasswords(p.target.value);
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                window.localStorage.clear();
            } else {
                window.localStorage.clear();
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleSignup = () => {
        createUserWithEmailAndPassword(getAuth(),email,password)
        .then((response) =>{
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setemail(response.user.email);
            console.log("response", response);
        })
        .catch((err) => {
            console.log("err", err);
        });
    
    };

    const handleSignin = () => {
        signInWithEmailAndPassword(getAuth(),email,password)
        .then((response) =>{
            navigate("/profile");
            window.localStorage.setItem("user", response.user.email);
            setemail(response.user.email);
            console.log("response", response);
        })
        .catch((err) => {
            console.log("err", err);
        });
    }
    return (
        <Container
            className="shadow p-4 mb-5 bg-white rounded"
            style={{ width: "500px"}}
            >
            {hasAccount ? (
                <Signup 
                    email={email} 
                    password={password} 
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    handleSignup={handleSignup}
                />
            )   :   (
                <Signin
                    email={email} 
                    password={password} 
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    handleSignin={handleSignin}
                />
                )}
        </Container>
    );
}

export default Home; //ให้ file ข้างนอกเรียก export ไปใช่ได้