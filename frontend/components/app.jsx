import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import HomePage from "./home_page";
import CreateActivityFormContainer from './activities/create_activity_form_container'
import ActivityIndexContainer from "./activities/activity_index_container"
import { AuthRoute } from "../util/route_util";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
// import { Route, Redirect, withRouter } from 'react-router-dom';


const App = () => (
    <div >
            <div className="navButtons">
                <div className='enduranceNav'>
                <h1><Link to='/'>Endurance</Link></h1>
                    

                </div>
                <div className='feedNav'>
                <Link to={'/'}>FEED</Link>
                </div>


                <div className='meNav'>
                <Link to={'/'}>ME</Link>
                </div>
                
                <div className='logNav'>
                    <Link to='/activities/new'>LOG</Link>
                </div>
            </div>

       
        <Switch>
            <Route exact path='/activities/new' component={CreateActivityFormContainer}></Route>
            <Route exact path='/' component={ActivityIndexContainer}></Route>
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        </Switch>
    </div>

);

export default App;