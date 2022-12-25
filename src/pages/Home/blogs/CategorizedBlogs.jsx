import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Blog from './Blog';

const CategorizedBlogs = () => {
//     const {id} = useParams();
//     const { data: CategoryBlogs } = useQuery(['CategoryBlogs'], () =>
//     axios.get(`${process.env.REACT_APP_URL}/category-blogs/${id}`).then((res) => res.data)
// );
const CategoryBlogs = useLoaderData();

    
    return (
        <div>
             <div className="grid lg:grid-cols-2 gap-10 container p-20  ">
                {CategoryBlogs?.map((blog) => (
                    <Blog key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default CategorizedBlogs;