/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../../Contexts/AuthContext';

const MyDashboard = () => {
    // const [currentUser, setCurrentUser] = useState({});
    const { user } = useContext(AuthContext);
    console.log(user);
    const { data: currentUser } = useQuery(['currentUser'], () =>
        axios
            .get(`${process.env.REACT_APP_URL}/user?email=${user?.email}`)
            .then((res) => res.data)
    );

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_URL}/user?email=${user?.email}`, {
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);

    //             setCurrentUser(data);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // }, [user?.email]);

    console.log(currentUser);

    return (
        <div className=" min-h-screen grid place-items-center bg-white">
            <div className="flex items-center gap-5 flex-wrap justify-center">
                <div>{/* <Lottie animationData={Welcome} /> */}</div>
                <div>
                    {' '}
                    <div className="text-xl text-black mb-3 text-center">
                        Welcome to {currentUser?.user?.name}&#39;s dashboard
                    </div>
                    <div className='grid place-items-center'>
                        <label
                            htmlFor="dashboardOpener"
                            tabIndex={0}
                            className="button text-accent  lg:hidden"
                        >
                            Click to Open Your dashBoard
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;
