import React from 'react';
import { Link } from 'react-router-dom';

const StartupSignUp = () => (
    <div className=''>
        <div >
      
            <Link to="/signup-details">
             
                <button type="button" className="button">
                    Sign Up
                </button>
            </Link>
        </div>
        <div>
            Already signed Up?
            <Link to="/login">
                <button type="button" className="button">
                    Login
                </button>
            </Link>
        </div>
    </div>
);

export default StartupSignUp;
