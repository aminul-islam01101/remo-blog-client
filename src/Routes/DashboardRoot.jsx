/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';
import Avatar from '../assets/images/avatar.png';
import Navbar from '../components/Navbar';
import useAdmin from '../hooks/useAdmin';
import useUser from '../hooks/useUser';

const DashboardRoot = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    const [isUser] = useUser(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile ">
                <input id="dashboardOpener" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side  ">
                    <label htmlFor="dashboardOpener" className="drawer-overlay" />
                    <ul className="menu p-4 w-64 bg-info  text-base-100">
                        <li className="mb-10">
                            {isAdmin && (
                                <div className="flex">
                                    <div>{user?.displayName}s Dashboard</div>
                                    <div>
                                        <img
                                            className="w-12 h-12 rounded-full"
                                            src={user?.photoURL || Avatar}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )}
                        </li>
                        {isUser && (
                            <div className="flex">
                                <div>{user?.displayName}s Dashboard</div>
                                <div>
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={user?.photoURL || Avatar}
                                        alt=""
                                    />
                                </div>
                            </div>
                        )}

                        {isAdmin && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/all-blogs">All Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/add-blogs">Add Blogs</NavLink>
                                </li>
                            </>
                        )}

                        {isUser && (
                            <li>
                                <NavLink to="/dashboard/my-blogs">My Blogs</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoot;
