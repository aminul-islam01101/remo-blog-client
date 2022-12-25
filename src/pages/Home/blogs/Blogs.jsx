/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import BlogImage from '../../../assets/images/blog.jpg';
import Blog from './Blog';
import Tags from './Tags';

const Blogs = () => {
   
    const { data: allCategory } = useQuery(['allCategory'], () =>
        axios.get(`${process.env.REACT_APP_URL}/blog-category`).then((res) => res.data)
    );



    return (
        <div className="bg-primary">
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${BlogImage})` }}>
                <div className="hero-overlay bg-neutral bg-opacity-80" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl mt-72">
                        <h1 className="mb-5 text-5xl font-bold">
                            Remo-Start&#39;s inspiring articles{' '}
                        </h1>

                        <Link to="#category" type="button" className="btn btn-secondary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container mt-20'>
                <h2>Popular Tags</h2>
                <div className="grid grid-flow-col auto-cols-fr gap-5 ">
                {allCategory?.map((category) => (
                    <Tags key={category._id} category={category} />
                ))}
            </div>


            </div>


            <Outlet/>

          
        </div>
    );
};

export default Blogs;
