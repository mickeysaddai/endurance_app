import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutAndReroute } from '../actions/session_actions';

const Navbar = ({showNav, logoutAndReroute}) => {
    console.log(showNav)
    if (!showNav)  {
        return null
    }
    return (
         <div className="navButtons">
                <div className='enduranceNav'>
                <Link to='/'>Endurance</Link>
                </div>
                    
                <div className='feedNav'>
                <Link to={'/'}>FEED</Link>
                </div>


                <div className='meNav'>
                <Link to={'/activities/profile'}>ME</Link>
                </div>
                
                <div className='logNav'>
                    <Link to='/activities/new'>LOG</Link>
                </div>


                {/* <div className="settings">
                    <i class="fas fa-cog settingButton"></i> */}
                    {/* <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
            
                {/* </div> */}

                    <div className="buttons logNext">
                        <button className="button is-success next"onClick={logoutAndReroute}>Log Out</button>
                    </div>
              
            </div>
    )
}

const mapStateToProps = (state) => ({
    showNav : !!state.session.id
})


const mapDispatchToProps = (dispatch) => ({
    logoutAndReroute: () => dispatch(logoutAndReroute())

})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);