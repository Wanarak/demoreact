import React from "react";
import logo from "../assets/riot-games.png";

function Header () {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img src={logo} alt="logo" width="5%"/>
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" 
            id="navbarNav">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">
                        Home
                    </a>                   
                </div>
                <div className="navbar-nav">
                    <a className="nav-link active" href="/sign-up">
                        Sign up
                    </a>                   
                </div>
                <div className="navbar-nav">
                    <a className="nav-link active" href="/sign-in">
                        Sign in
                    </a>                   
                </div>
            </div>
        </div>
    </nav>
    )

}

export default Header;