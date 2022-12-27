import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Blog from './Blog';

const AllBlogs = () => {

    const { data: allBlogs } = useQuery(['allBlogs'], () =>
    axios.get(`${process.env.REACT_APP_URL}/blogs`).then((res) => res.data)
);
    return (
        <div>
            <div className="container bg-primary p-5  text-center ">
                <p className='mt-20 text-2xl py-5'>Explore Our Blogs</p>
                  <div className="grid lg:grid-cols-2 gap-10  py-2  ">
                    {allBlogs?.map((blog) => (
                        <Blog key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>

            <div className="container bg-primary p-5  text-center">
                <p className='mt-20 text-2xl py-5'>Our most Poular Blogs</p>
                  <div className="grid lg:grid-cols-2 gap-10  py-5  ">
                    {allBlogs?.slice(0,2).map((blog) => (
                        <Blog key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;