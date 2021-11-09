import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                </div>
    )
}

export default Navbar;