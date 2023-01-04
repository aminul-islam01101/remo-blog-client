/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsDiscord, BsEnvelope, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoWhite.png';

const Footer = () => (
    <div className='bg-[#0B132A] '>
    <footer className="flex justify-center items-center mt-10 ">
        <div className=" text-white items-center w-full pt-6">
            <div className="flex  flex-col-reverse justify-between w-full px-4 sm:px-10 md:px-20 md:flex-row gap-3">
                <div className="flex  ">
                    <div className="flex flex-col leading-7 items-start">
                        <h1 className="text-lg font-semibold">CATEGORY</h1>
                        <Link className="hover:text-cyan-600 text-sm" to="/">
                            Home
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/startup">
                            Startup
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/remoforce">
                            Remo-Force
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/services">
                            Services
                        </Link>
                    </div>

                    <div className="flex flex-col leading-7 ml-20">
                        <h1 className="text-lg font-semibold">Links</h1>
                        <Link className="hover:text-cyan-600 text-sm" to="/">
                            Menu
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/Blog">
                            Blog
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/ourteam">
                            Our Team
                        </Link>
                        <Link className="hover:text-cyan-600 text-sm" to="/Contacs">
                            Contacs
                        </Link>
                    </div>
                </div>
                {/* bg-transparent border drop-shadow-sm shadow-transparent rounded-md placeholder-white px-12 py-2 focus:outline-none focus:border-cyan-600 text-white */}
                <div className="flex flex-col mx-auto  md:flex-row ">
                    <div className="flex  flex-col ">
                        <span className="text-md font-bold mb-2">SUBSCRIBE</span>
                        <div>
                            <div className="flex flex-wrap gap-2 items-center  ">
                                <div className="flex items-center bg-tr drop-shadow-sm shadow-transparent w-50 rounded-md border px-5  focus:outline-none  text-white  ">
                                    <BsEnvelope className=" text-xl text-white" />
                                    <input
                                        className="outline-none  border-none focus:ring-0 bg-transparent placeholder-white"
                                        type="email"
                                        placeholder="Your Email Id"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="py-2 px-4  rounded-md text-white bg-[#65DC7F] 
                                   
                                     hover:text-blue-500 hover:bg-white hover:font-semibold hover:transform ease-in-out duration-300"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <p className="text-xs pt-2 ">
                            By subscribing to newsletter you agree with our
                            <Link to="#" className="text-blue-800">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:px-20 px-0">
                <hr className="md:overflow-hidden bg-[#19A5FF] h-[2px] mx-auto mt-5" />
            </div>
            <div className="flex  flex-col-reverse justify-between w-full md:px-20 px-4 sm:px-10 md:flex-row">
                <div className="flex flex-col">
                    <img src={logo} className="w-20 mt-5" alt="logo" />
                    <p className="text-xs mt-3 mb-6">
                        Scroll down the page for more recommendations. Below you will find a variety
                        of products <br />
                        from all categories on Steam that may be of interest to you.
                    </p>
                </div>
                <div className="flex place-items-center justify-center space-x-3 mt-5 md:mt-0">
                    <BsDiscord className="text-xl" />
                    <BsLinkedin className="text-xl" />
                    <BsInstagram className="text-xl" />
                    <BsTwitter className="text-xl" />
                </div>
            </div>
        </div>
    </footer>
    </div>
);

export default Footer;
