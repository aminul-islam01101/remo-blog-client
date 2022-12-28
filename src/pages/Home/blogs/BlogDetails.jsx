/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiOutlineShareAlt, AiFillLike } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BsBookmarkPlus } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
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
    const [likeStatus, setLikeStatus] = useState(false)
    const [likeCount, setLikeCount] = useState([])
    const { user } = useContext(AuthContext)


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

useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/like/${id}`)
    .then((res) => res.json())
    .then((data) => {
    
        

            data?.like?.forEach((status) =>setLikeStatus( status?.like))

     setLikeCount(data?.like)
   
    });
}, [id])

// useEffect(() => {
//     fetch(`${process.env.REACT_APP_URL}/likestatus?id=${id}&email=${user?.email}`)
//     .then((res) => res.json())
//     .then((data) => {
    
      
    
  
//      setLikeStatus(data)
   
//     });
   
   

// }, [id, user?.email])


console.log(likeCount);



               







    // const { data: likes} = useQuery(['likes'], () =>
    //     axios.get(`${process.env.REACT_APP_URL}/like/${id}`).then((res) => res.data)
    // );
    const shareUrl = `https://remo-start.web.app/blog-details/${id}`;
    




    
 
    const handleClick = () => {
        fetch(`${process.env.REACT_APP_URL}/like?id=${id}&email=${user?.email}}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
          
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                refetch()
                document.location.reload(true)
                
            })
            .catch((err) => {
                console.error(err);
            }); 
    
        };

   

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
          document.location.reload(true)

    
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
				<FaRegComments/>
				<span>{comments?.length}</span>
			</button>
			<button onClick={handleClick} type="button" className="flex items-center p-1 space-x-1.5">
            {likeStatus ? <AiFillLike/> : <BiLike />}
				<span>{likeCount && likeCount.length || 0}</span>
			</button>

            <button aria-label="Bookmark this post" type="button" className="p-2">
				<BsBookmarkPlus/>
			</button>
		</div>
		<div className="space-x-2 flex items-center">
			<button aria-label="Share this post" type="button" className="p-2 text-center">
		<AiOutlineShareAlt/>
			</button>
            <span>
                        <FacebookShareButton url={shareUrl} quote="title" hashtag="#blog">
                            <FacebookIcon size={30} round />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton
                            url={shareUrl}
                            quote="title"
                            hashtag="#blog"
                        >
                            <FacebookMessengerIcon size={30} round />
                        </FacebookMessengerShareButton>

                        <WhatsappShareButton url={shareUrl} quote="title" hashtag="#blog">
                            <WhatsappIcon size={30} round />
                        </WhatsappShareButton>
                        <TwitterShareButton url={shareUrl} quote="title" hashtag="#blog">
                            <TwitterIcon size={30} round />
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} quote="title" hashtag="#blog">
                            <LinkedinIcon size={30} round />
                        </LinkedinShareButton>

                        <TelegramShareButton url={shareUrl} quote="title" hashtag="#blog">
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
                                {blog?.postingTime}
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

           <div className='grid justify-end  items-center  m-0 '> 
            {user?.uid ? <button type="submit" className="button ">
                Submit
             </button> : <Link to='/login'><button type="submit" className="button ">
               Login to Submit
             </button></Link> }
            </div>
            </form>

            <p className=' p-3 text-xl my-5'>comments({comments && comments?.length || 0})</p>
            
           {comments && comments?.map((comment) =>(<div className='p-3 border-double border-4 border-secondary m-5 rounded' key={Math.random()}> 
           <p>{user?.displayName}</p>
           <p>{comment?.comments}</p></div>) )}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
