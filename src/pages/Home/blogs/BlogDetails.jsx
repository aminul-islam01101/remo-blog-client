/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog } = useQuery(['blog'], () =>
        axios.get(`${process.env.REACT_APP_URL}/blogs/${id}`).then((res) => res.data)
    );
    const shareUrl = 'https://aminul-islam01101.web.app/';

    return (
        <div className="grid min-h-screen place-items-center">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img
                    className="object-cover w-full h-64"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article"
                />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                            Product
                        </span>
                        <a
                            href="#"
                            className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                            tabIndex="0"
                            role="link"
                        >
                            I Built A Successful Blog In One Year
                        </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                            egestas quam volutpat viverra. In pretium nec senectus erat. Et
                            malesuada lobortis.
                        </p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                    alt="Avatar"
                                />
                                <a
                                    href="#"
                                    className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                                    tabIndex="0"
                                    role="link"
                                >
                                    Jone Doe
                                </a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                                21 SEP 2015
                            </span>
                        </div>
                    </div>
                    <div>
                        <FacebookShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton
                            url={shareUrl}
                            quote="title"
                            hashtag="#portfolio"
                        >
                            <FacebookMessengerIcon size={40} round />
                        </FacebookMessengerShareButton>

                        <WhatsappShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <WhatsappIcon size={40} round />
                        </WhatsappShareButton>
                        <TwitterShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <TwitterIcon size={40} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <LinkedinIcon size={40} round />
                        </LinkedinShareButton>

                        <TelegramShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <TelegramIcon size={40} round />
                        </TelegramShareButton>
                    </div>
                </div>
                <div>
                    <p>comments</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
