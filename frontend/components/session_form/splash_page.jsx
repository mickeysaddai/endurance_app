import React from "react";
import { Link } from 'react-router-dom';

class SplashPage extends React.Component{
    
    render(){
        const {splashPhoto} = this.props
        return (
            <div>
                <div className="splashPhoto">
                    <div>
                        <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand"> 
                        <p className="splash">
                            <i className="fas fa-heartbeat"></i>Endurance
                        </p>
                </div>
                
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar navbarButtons">
                        <a className="navbar-item splashNav">
                            <Link className="splashNav" to={'/signup'}>Sign Up</Link>
                        </a>
                        <a className="navbar-item splashNav">
                            <Link className="splashNav" to={'/login'}>Login</Link>
                        </a>
                        </div>
                    </div>
                    </nav>
                </div>

                <div className="splashPage">

                <img  src="https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2538&q=80" alt="Splash Page" />
                </div>


                </div>
              
            </div>
        )
    }
}

export default SplashPage;