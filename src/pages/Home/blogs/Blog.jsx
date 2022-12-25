import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => (
    <div className="shadow-xl">
        {/* <div className="card w-full h-full my-5 opacity-100 hover:opacity-50 shadow-xl image-full"> */}
        <figure>
            <img className="w-full" src={blog?.image} alt="img" />
        </figure>
        <div className="card-body">
            <h2 className="text-3xl text-center font-semibold tracking-wide">{blog?.blogName}</h2>
            {/* <p className="text-white text-center">
                    <ReadMore text={blog?.answer} />
                </p> */}
            <Link to={`/blog-details/${blog._id}`}>
                <button type="button" className="button">
                    Details
                </button>
            </Link>
        </div>
    </div>
);

export default Blog;
