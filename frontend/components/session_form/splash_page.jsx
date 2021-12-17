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
                        <p class="splash">
                            <i className="fas fa-heartbeat"></i>Endurance
                        </p>
                </div>
                
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar navbarButtons">
                        <a class="navbar-item splashNav">
                            <Link className="splashNav" to={'/signup'}>Sign Up</Link>
                        </a>
                        <a class="navbar-item splashNav">
                            <Link className="splashNav" to={'/login'}>Login</Link>
                        </a>
                        </div>
                    </div>
                    </nav>
                </div>

                <img  src={splashPhoto} alt="Splash Page" />
                </div>
              
            </div>
        )
    }
}

export default SplashPage;