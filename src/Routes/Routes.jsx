import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';

import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

import Blogs from '../pages/Home/blogs/Blogs';

import AdminRoute from './AdminRoute';

import DashboardRoot from './DashboardRoot';

import ProtectedRoute from './ProtectedRoute';
import Root from './Root';
import MyDashboard from '../pages/dashboard/MyDashboard';
import AllBlogs from '../pages/dashboard/admin/AllBlogs';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />} errorElement={<Error />}>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />

                {/* <Route
                    path="/category/:id"
                    element={
                        <ProtectedRoute>
                            <CategoryDetails />
                        </ProtectedRoute>
                    }
                /> */}

                <Route path="/Signup" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
            </Route>
            {/* <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardRoot />
                    </ProtectedRoute>
                }
                errorElement={<Error />}
            >
                <Route path="/dashboard" element={<MyDashboard />} />

                <Route
                    path="/dashboard/buyers"
                    element={
                        <AdminRoute>
                            <AllBlogs />
                        </AdminRoute>
                    }
                />
            </Route> */}
        </>
    )
);

export default router;
