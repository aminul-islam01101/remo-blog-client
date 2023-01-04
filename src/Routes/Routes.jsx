import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Error from '../pages/Error';
import Home from '../pages/Home/Home';

import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

import Blogs from '../pages/Home/blogs/Blogs';

import AllBlogs from '../pages/Home/blogs/AllBlogs';
import BlogDetails from '../pages/Home/blogs/BlogDetails';
import CategorizedBlogs from '../pages/Home/blogs/CategorizedBlogs';
import MyDashboard from '../pages/dashboard/MyDashboard';
import AdminRoute from './AdminRoute';
import DashboardRoot from './DashboardRoot';
import Root from './Root';

import AddBlogs from '../pages/dashboard/admin/AddBlogs';
import AllBlogsList from '../pages/dashboard/admin/AllBlogsList';
import ProtectedRoute from './ProtectedRoute';
import UserRoute from './UserRoute';

import UpdateBlog from '../pages/dashboard/admin/UpdateBlog';
import MyBlogs from '../pages/dashboard/user/MyBlogs';
import MyBookmark from '../pages/dashboard/user/MyBookmark';
import MakeAdmin from '../pages/dashboard/admin/MakeAdmin';
import StartUp from '../pages/startUp/StartUp';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />} errorElement={<Error />}>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Blogs />}>
                    {/* <Route path="/" element={<AllBlogs />} /> */}
                    <Route path="/blogs" element={<AllBlogs />} />
                    <Route
                        path="blog/category/:id"
                        element={<CategorizedBlogs />}
                        loader={async ({ params }) =>
                            fetch(`${process.env.REACT_APP_URL}/category-blogs/${params.id}`)
                        }
                    />
                </Route>
                {/* <Route path="/blog-details/:id" element={<BlogDetails />} /> */}
                <Route
                path="/blog-details/:id"
                element={
                    <ProtectedRoute>
                       <BlogDetails />
                    </ProtectedRoute>
                }
               
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
                <Route path="/start-up" element={<StartUp />} />

                <Route
                    path="/dashboard/all-blogs/edit/:id"
                    element={
                        <AdminRoute>
                            <UpdateBlog />
                        </AdminRoute>
                    }
                />
            </Route>
            <Route
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
                    path="/dashboard/all-blogs"
                    element={
                        
                        <AdminRoute>
                            <AllBlogsList />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/dashboard/all-blogs/edit/:id"
                    element={
                        <AdminRoute>
                            <UpdateBlog />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/dashboard/add-blogs"
                    element={
                        <AdminRoute>
                            <AddBlogs />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/dashboard/make-admin"
                    element={
                        <AdminRoute>
                            <MakeAdmin/>
                        </AdminRoute>
                    }
                />

                <Route
                    path="/dashboard/my-blogs"
                    element={
                        <UserRoute>
                            <MyBlogs />
                        </UserRoute>
                    }
                />
                <Route
                    path="/dashboard/my-bookmark"
                    element={
                        <UserRoute>
                            <MyBookmark />
                        </UserRoute>
                    }
                />
            </Route>
        </>
    )
);

export default router;
