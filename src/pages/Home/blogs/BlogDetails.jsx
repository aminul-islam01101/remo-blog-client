/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
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
import AuthContext from '../../../Contexts/AuthContext';

const BlogDetails = () => {
    // const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { id } = useParams();
    const { data: blog, refetch } = useQuery(['blog'], () =>
        axios.get(`${process.env.REACT_APP_URL}/blogs/${id}`).then((res) => res.data )
    );
// useEffect(() => {
//     fetch(`${process.env.REACT_APP_URL}/comments/${id}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                   console.log(data);
//                   setComments(data)
//                   refetch()
                  
           
               
//                 });
            
// refetch()
// setRefresh(!refresh)
 
// }, [id,refetch] )
// console.log(comments);



    const { data: comments} = useQuery(['comments'], () =>
        axios.get(`${process.env.REACT_APP_URL}/comments/${id}`).then((res) => res.data)
    );
    const shareUrl = 'https://aminul-islam01101.web.app/';
    const { user } = useContext(AuthContext)
 
    

   

        // Posting form data
        const muteFunc = async (data) => axios.post(`${process.env.REACT_APP_URL}/comment/${id}`, data);

        const { mutate } = useMutation(muteFunc, {
            onSuccess: (res) => {
                if (res.data.message) {
                    toast.error(`${res.data.message}`);
                  
                    return;
                }
    refetch()
                toast.success('Successfully added a comment');
            
            },
            onError: () => toast.error('There is an error'),
        });
        const {
            register,
            formState: { errors },
            handleSubmit,
            reset,
        } = useForm({ mode: 'onChange' });

        const onSubmit = (data) => {

            if (!user?.uid) {
                toast.error('You must log in to comment')
                return
            }
           
         
          const comment = {...data, user:user?.displayName, userPhoto:user?.photoURL, time:new Date()};
           console.log(comment);
          mutate(comment)
          setRefresh(!refresh)

    
            refetch();
            reset();
        };

    return (
        <div className="bg-white grid min-h-screen place-items-center">
            <div className="max-w-2xl overflow-hidden dark:bg-secondary bg-primary rounded-lg shadow-md ">
                <img
                    className="object-cover w-full h-64"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article"
                />

                <div className="p-6">
                    <div>
                    <div className="flex flex-wrap justify-between">
                    <div className="flex space-x-2 text-sm dark:text-gray-400">
			<button type="button" className="flex items-center p-1 space-x-1.5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of comments" className="w-4 h-4 fill-current dark:text-violet-400">
					<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z" />
					<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z" />
				</svg>
				{/* <span>{comments?.length}</span> */}
			</button>
			<button type="button" className="flex items-center p-1 space-x-1.5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-400">
					<path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z" />
					<path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z" />
				</svg>
				<span>283</span>
			</button>

            <button aria-label="Bookmark this post" type="button" className="p-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
					<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z" />
				</svg>
			</button>
		</div>
		<div className="space-x-2 flex items-center">
			<button aria-label="Share this post" type="button" className="p-2 text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
					<path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z" />
				</svg>
			</button>
            <span>
                        <FacebookShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <FacebookIcon size={30} round />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton
                            url={shareUrl}
                            quote="title"
                            hashtag="#portfolio"
                        >
                            <FacebookMessengerIcon size={30} round />
                        </FacebookMessengerShareButton>

                        <WhatsappShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <WhatsappIcon size={30} round />
                        </WhatsappShareButton>
                        <TwitterShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <TwitterIcon size={30} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <LinkedinIcon size={30} round />
                        </LinkedinShareButton>

                        <TelegramShareButton url={shareUrl} quote="title" hashtag="#portfolio">
                            <TelegramIcon size={30} round />
                        </TelegramShareButton>
                    </span> 
			
		</div>
		
	</div>
                        <h2
                           className='text-4xl my-5'
                         
                           
                          
                        >
                            I Built A Successful Blog In One Year
                        </h2>
                     
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="object-cover h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                    alt="Avatar"
                                />
                                <p
                                   
                                    className="mx-2 font-semibold text-gray-600 dark:text-gray-500"
                                  
                                >
                                    Jone Doe
                                </p>
                            </div>
                            <p className="m-3 pt-1 text-xs text-gray-600 dark:text-gray-300 font-semibold">
                                21 SEP 2015
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div>

                    <div className='container my-20'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum aut exercitationem odit laudantium nisi a perspiciatis. Quos autem incidunt obcaecati ipsa blanditiis eligendi inventore!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum aut exercitationem odit laudantium nisi a perspiciatis. Quos autem incidunt obcaecati ipsa blanditiis eligendi inventore!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum aut exercitationem odit laudantium nisi a perspiciatis. Quos autem incidunt obcaecati ipsa blanditiis eligendi inventore!</p>
                        <br />
                    </div>
                  
                    <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container ng-untouched ng-pristine ng-valid "
                >   <div className='text-center'>
                <label htmlFor="comments" className="text-xl ">
                  Share Your Thoughts
                    <textarea
                        required
                        {...register('comments', {
                            minLength: 4,
                        })}
                        id="comments"
                        placeholder="Write a comment"
                        className="w-full rounded-md focus:ring my-5 focus:ring-opacity-75 focus:ring-violet-400 "
                    />
                    {errors?.comments && (
                        <p className="text-red-500">
                            *Comments should be minimum 4 Character
                        </p>
                    )}
                </label>
            </div>

           <div className='grid justify-end  items-center  m-0 '> <button type="submit" className="button ">
                Submit
            </button></div></form>

            <p className='text-center text-xl my-5'>comments({comments?.length})</p>
            {comments?.map((comment) =><p className='p-3 border-double border-4 border-secondary m-5 rounded' key={Math.random()}>{comment?.comments}</p> )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
