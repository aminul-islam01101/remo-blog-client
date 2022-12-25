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
              <div className="grid lg:grid-cols-2 gap-10 container p-20  ">
                {allBlogs?.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default AllBlogs;