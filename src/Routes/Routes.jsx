import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';

import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

import Blogs from '../pages/Home/blogs/Blogs';




import Root from './Root';
import AllBlogs from '../pages/Home/blogs/AllBlogs';
import CategorizedBlogs from '../pages/Home/blogs/CategorizedBlogs';
import BlogDetails from '../pages/Home/blogs/BlogDetails';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />} errorElement={<Error />}>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />}>
                    <Route path="/blogs" element={<AllBlogs />} />
                    <Route
                    path="/blogs/category/:id"
                    element={<CategorizedBlogs />}
                    loader={async ({ params }) =>
                    fetch(`${process.env.REACT_APP_URL}/category-blogs/${params.id}`)
                }
                />
              
            </Route>
            <Route
                path="/blog-details/:id"
                element={<BlogDetails />}
                
            />




           

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
