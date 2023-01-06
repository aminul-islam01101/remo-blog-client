import React from 'react';
import { Link } from 'react-router-dom';

const StartUp = () => (
    <div className="">
        <Link to="/startup-signup">
            <button type="button" className="button mr-5">
                Create an account
            </button>
        </Link>
        <button type="button" className="button">
            Post Job
        </button>
    </div>
);

export default StartUp;
