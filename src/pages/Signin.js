import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function Signin(props) {    
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Sign in</h1>

            <div>
                <p>Username</p>
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Email"
                    value={props.email}
                    autoFocus //focus ช่องนี้ก่อน
                    required //จำเป็นต้องกรอก
                    onChange={(e) => props.handleEmail(e)}
                />
            </div>
            <div>
                <p>Password</p>
                <input
                    className="form-control mb-3"
                    type="password" //type password จะทำให้เป็นตาปลา
                    placeholder="password"
                    value={props.password}
                    required //จำเป็นต้องกรอก
                    onChange={(p) => props.handlePassword(p)}

                />
            </div>

            <div>
                <button 
                    className= "btn btn-primary mt-2 w-100"
                    onClick={() => props.handleSignin()}
                >
                    Sign in
                </button>
                <div className="d-flex align-items-center justify-content-center">
                <p className="text-center mt-3 mr-1">Don't have an account?</p>
                &nbsp;
                <button
                type="button"
                className="btn btn-link px-0"
                onClick={() => props.setHasAccount(!props.hasAccount)}
                >
                Sign up
                </button>
            </div>
        </div>
        </div>
    );
}

export default Signin;