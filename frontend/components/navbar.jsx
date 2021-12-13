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
                <Link to='/'><i class="fas fa-heartbeat"></i>Endurance</Link>
                </div>
                    
                <div className='feedNav'>
                <Link to={'/'}><i class="fas fa-receipt"></i> FEED</Link>
                </div>


                <div className='meNav'>
                <Link to={'/activities/profile'}><i class="fas fa-address-card"></i> ME</Link>
                </div>
                
                <div className='logNav'>
                    <Link to='/activities/new'><i class="fas fa-plus-circle"></i> LOG</Link>
                </div>


                {/* <div className="settings">
                    <i class="fas fa-cog settingButton"></i> */}
                    {/* <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
            
                {/* </div> */}

                    <div className="buttons">
                        {/* <button className="button is-success next"onClick={logoutAndReroute}>Log Out</button> */}
                        <div className="dropdown is-hoverable is-right logoutMenu">
                        <div className="dropdown-trigger logoutMenu">
                            <i className="fas fa-cog logout" aria-controls="dropdown-menu4"></i>
                        </div>
                        <div className="dropdown-menu logoutMenu " id="dropdown-menu3" role="menu">
                            <div className="dropdown-content logoutMenu">
                            <div className="dropdown-item logoutMenu logoutMenuItem">
                                 <a className="dropdown-item logoutMenu" onClick={() => logoutAndReroute()}>
                                   Log Out
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
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