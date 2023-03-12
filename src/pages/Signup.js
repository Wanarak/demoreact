import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function Signup(props) {
    const navigate = useNavigate();
    console.log("props", props);
    return (
        <div>
        <h1 style={{textAlign: "center"}}>Sign up</h1>
            <div>
                <p>Username</p>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Email"
                    value= {props.email}
                    autoFocus //focus ช่องนี้ก่อน
                    required //จำเป็นต้องกรอก
                    onChange={(e) => props.handleEmail(e)}
                />
            </div>
            <div>
            <p>Password</p>
                <input
                    className="form-control mb-3"
                    type="Password"
                    placeholder="password"
                    value= {props.password}
                    required //จำเป็นต้องกรอก
                    onChange={(p) => props.handlePassword(p)}
                />
            </div>
            {/* <div>
            <p>Confirm Password</p>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="demo1234"
                    value=""
                    required //จำเป็นต้องกรอก
                />
            </div> */}
            <div>
                <button className= "btn btn-primary mt-2 w-100"
                onClick={() => props.handleSignup()}
                >Sign up</button>
                <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Have an account?</p>
                <button
                className="btn btn-link px-0"
                onClick={() => props.setHasAccount(!props.hasAccount)}
                //onClick={() => navigate("/sign-in")}
                >
                Sign in
                </button>
                </div>                
            </div>
        </div>
    );
    
}

export default Signup;