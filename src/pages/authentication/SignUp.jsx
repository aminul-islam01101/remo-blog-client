// /* eslint-disable no-shadow */
// /* eslint-disable react/jsx-props-no-spreading */
// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';

// import AuthContext from '../../Contexts/AuthContext';


// import setAuthToken from './components/SetAuthToken';

// const SignUp = () => {
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [userEmail, setUserEmail] = useState('');

//     const navigate = useNavigate();

//     const {
//         register,
//         handleSubmit,
//         getValues,
//         reset,
//         formState: { errors },
//     } = useForm({ mode: 'onChange' });
//     const { password, email } = getValues();

//     // jwt verify

//     const onSubmit = (data) => {
//         console.log(data.role);

//         const { firstName, lastName } = data;
//         setError('');
//         createUser(email, password)
//             .then((result) => {
//                 const { user } = result;
//                 console.log(user);
//                 reset();

//                 const handleUpdateProfile = () => {
//                     const profile = {
//                         displayName: `${firstName} ${lastName}`,
//                     };
//                     updateUserProfile(profile)
//                         .then(() => {
//                             setAuthToken({ ...user, role: data?.role, verified: false });
//                             // mutate({ email, userName: profile.displayName });
//                         })

//                         .catch((err) => console.error(err));
//                 };

//                 toast.success('Signup successful');
//                 navigate('/');

//                 handleUpdateProfile();

//                 //  user?.uid && navigate(from, { replace: true });
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setError(err.message);
//             });
//     };

//     return (
//         <div className="container w-full max-w-md p-8 space-y-3 my-10 rounded-xl  bg-primary text-accent">
//             <h1 className="text-2xl font-bold text-center">Sign Up</h1>
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="space-y-6 ng-untouched ng-pristine ng-valid"
//             >
//                 {/* username */}
//                 <div className="space-y-1 text-sm">
//                     <div>
//                         <label htmlFor="firstName" className="block dark:text-gray-400">
//                             User Name
//                             <div className="flex gap-2">
//                                 <div>
//                                     <input
//                                         {...register('firstName', {
//                                             required: true,
//                                             maxLength: 20,
//                                             pattern: /^[A-Za-z]+$/i,
//                                         })}
//                                         id="firstName"
//                                         placeholder="First Name"
//                                         className="w-full  input py-2 input-bordered bg-error "
//                                     />

//                                     {errors?.lastName?.type === 'pattern' && (
//                                         <p className="text-red-500">
//                                             *Alphabetical characters only
//                                         </p>
//                                     )}
//                                     {errors?.lastName?.type === 'maxLength' && (
//                                         <p className="text-red-500">
//                                             *First name cannot exceed 20 characters
//                                         </p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <input
//                                         {...register('lastName', {
//                                             required: true,
//                                             maxLength: 20,
//                                             pattern: /^[A-Za-z]+$/i,
//                                         })}
//                                         id="lastName"
//                                         placeholder="Last Name"
//                                         className="w-full  input py-2 input-bordered bg-error"
//                                     />

//                                     {errors?.lastName?.type === 'pattern' && (
//                                         <p className="text-red-500">
//                                             *Alphabetical characters only
//                                         </p>
//                                     )}
//                                     {errors?.lastName?.type === 'maxLength' && (
//                                         <p className="text-red-500">
//                                             *Last name cannot exceed 20 characters
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                         </label>
//                     </div>

//                     {/* email */}
//                     <div className="space-y-1 text-sm">
//                         <label htmlFor="email" className="block dark:text-gray-400">
//                             Email
//                             <input
//                                 {...register('email', { required: true })}
//                                 type="email"
//                                 id="email"
//                                 placeholder="Enter email"
//                                 className="w-full  input py-2 input-bordered bg-error"
//                             />
//                         </label>
//                     </div>
//                     {/* password */}
//                     <div className="space-y-1 text-sm">
//                         <label htmlFor="password" className="block dark:text-gray-400">
//                             Password
//                             <input
//                                 {...register('password', {
//                                     required: true,

//                                     pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
//                                 })}
//                                 type="password"
//                                 id="password"
//                                 placeholder="Password"
//                                 className="w-full  input py-2 input-bordered bg-error"
//                             />
//                             {errors?.password?.type === 'pattern' && (
//                                 <p className="text-red-500">
//                                     *Minimum 6 Character, include one letter and one number
//                                 </p>
//                             )}
//                         </label>
//                     </div>
//                     {/* confirm password */}
//                     <div className="space-y-1 text-sm">
//                         <label htmlFor="confirmPassword" className="block dark:text-gray-400">
//                             Confirm password
//                             <input
//                                 type="password"
//                                 {...register('confirmPassword', {
//                                     validate: (val) =>
//                                         password === val || 'Passwords should match!',
//                                 })}
//                                 id="confirmPassword"
//                                 placeholder="Confirm password"
//                                 className="w-full  input py-2 input-bordered bg-error"
//                             />
//                             {errors?.confirmPassword && (
//                                 <p className="text-red-500">{errors?.confirmPassword?.message}</p>
//                             )}
//                         </label>

//                         {error && (
//                             <h2 className="text-xl text-rose-600 font-bold my-10">
//                                 *{error.split('/')[1].split(')')[0]}
//                             </h2>
//                         )}

//                         {/* checkbox */}
//                         <div className="flex items-center">
//                             <label htmlFor="terms" className="text-sm dark:text-gray-400">
//                                 <input
//                                     type="checkbox"
//                                     name="terms"
//                                     id="terms"
//                                     aria-label="terms"
//                                     required
//                                     className="mr-1 rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400"
//                                 />
//                                 I agree to terms and condition
//                             </label>
//                         </div>
//                         <div className="space-y-2">
//                             <div>
//                                 <button
//                                     type="submit"
//                                     className="button mt-5 w-full"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </div>
//                             <p className="px-6 text-sm text-center dark:text-gray-400">
//                                 Already member?
//                                 <Link
//                                     to="/Signin"
//                                     rel="noopener noreferrer"
//                                     className="hover:underline  dark:text-violet-400"
//                                 >
//                                     Sign in
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { BsDiscord, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from '../../Contexts/AuthContext';


import setAuthToken from './components/SetAuthToken';
import registerLogo from '../../assets/images/WorkflowRegister.png';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });
    const { password, email } = getValues();

    const onSubmit = (data) => {
        console.log(data.role);

        const { firstName, lastName } = data;
        setError('');
        createUser(email, password)
            .then((result) => {
                const { user } = result;
                console.log(user);
                reset();

                const handleUpdateProfile = () => {
                    const profile = {
                        displayName: `${firstName} ${lastName}`,
                    };
                    updateUserProfile(profile)
                        .then(() => {
                            setAuthToken({ ...user, role: data?.role, verified: false });
                            // mutate({ email, userName: profile.displayName });
                        })

                        .catch((err) => console.error(err));
                };

                toast.success('Signup successful');
                navigate('/');

                handleUpdateProfile();

                //  user?.uid && navigate(from, { replace: true });
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
            });
    };
    return(
    <section className="bg-white py-10">
        <div className="flex container flex-col md:flex-row w-full gap-10 justify-between">
            <section className="flex flex-col md:w-1/2 items-center  col-span-6 justify-center">
            {/* <section className="flex flex-col h-32 items-center lg:h-[533px] xl:col-span-6 justify-center lg:w-1/2 lg:mt-20"> */}
                <div>
                    <img
                        alt="Night"
                        src={registerLogo}
                        className=" h-full w-full  object-cover"
                    />
                </div>
                <div className="grid grid-cols-4 place-items-center space-x-3">
                    <BsDiscord className="text-xl" />
                    <BsLinkedin className="text-xl" />
                    <BsInstagram className="text-xl" />
                    <BsTwitter className="text-xl" />
                </div>
            </section>

            <div
                aria-label="Main"
                className="flex items-center justify-center  py-8  lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6  "
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <div className="relative -mt-16 block">
                        <div className="mt-4 leading-relaxed mb-8 border flex justify-around items-center border-[#FF9900] rounded-md p-2">
                            <div className="mr-2">
                                <RiErrorWarningLine className="text-[#FF9900] text-3xl" />
                            </div>
                            <div className="flex-1">
                                <span className="text-[#FF9900] font-semibold">Warning</span>
                                <p className="text-xs">
                                    Hey there new user! We just wanted to inform you that we use
                                    cookies to ensure you have the best browsing experience on our
                                    website. Please read our terms and conditions.
                                </p>
                            </div>
                        </div>
                        <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Create Account
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>

                            <input
                                type="text"
                                {...register('firstName', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                                id="firstName"
                                name="firstName"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                            />
                                {errors?.firstName?.type === 'pattern' && (
                                        <p className="text-red-500">
                                            *Alphabetical characters only
                                        </p>
                                    )}
                                    {errors?.firstName?.type === 'maxLength' && (
                                        <p className="text-red-500">
                                            *First name cannot exceed 20 characters
                                        </p>
                                    )}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>

                            <input

                                type="text"
                                {...register('lastName', {
                                            required: true,
                                            maxLength: 20,
                                            pattern: /^[A-Za-z]+$/i,
                                        })}
                                        id="lastName"
                                name="lastName"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                            />
                            
                            {errors?.lastName?.type === 'pattern' && (
                                        <p className="text-red-500">
                                            *Alphabetical characters only
                                        </p>
                                    )}
                                    {errors?.lastName?.type === 'maxLength' && (
                                        <p className="text-red-500">
                                            *Last name cannot exceed 20 characters
                                        </p>
                                    )}
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="Email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                {...register('email', { required: true })}
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                            />
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="Password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                 {...register('password', {
                                    required: true,

                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                })}
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                            />
                            {errors?.password?.type === 'pattern' && (
                                <p className="text-red-500">
                                    *Minimum 6 Character, include one letter and one number
                                </p>
                            )}
                        </div>

                        <div className="col-span-6">
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password Confirmation
                            </label>

                            <input
                               type="password"
                               {...register('confirmPassword', {
                                   validate: (val) =>
                                       password === val || 'Passwords should match!',
                               })}
                               id="confirmPassword"
                                name="confirmPassword"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                            />
                              {errors?.confirmPassword && (
                                <p className="text-red-500">{errors?.confirmPassword?.message}</p>
                            )}
                        </div>
                      

                        <div className="col-span-6">
                            <input
                                type="number"
                                id="number"
                                name="number"
                                className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                placeholder="123-45-678"
                            />
                        </div>
                        {error && (
                            <h2 className="text-xl text-rose-600 font-bold my-10">
                                *{error.split('/')[1].split(')')[0]}
                            </h2>
                        )}

                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-3">
                                <input
                                    type="checkbox"
                                    id="MarketingAccept"
                                    name="marketing_accept"
                                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                />

                                <span className="text-sm text-gray-700">
                                    I???ve read and agree with the{' '}
                                    <Link to="/terms" className="text-red-500">
                                        Terms and Conditions.
                                    </Link>
                                </span>
                            </label>
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center flex-col sm:gap-3 justify-center items-center">
                            <button type='submit' className="inline-block shrink-0 rounded-md border border-blue-600 px-4 text-2xl py-3 font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                                <IoIosArrowForward />
                            </button>
                            <p className="mt-4 text-sm font-semibold sm:mt-0">
                                Already Registered?
                                <Link to="/login" className="text-red-500">
                                    {' '}
                                    Login Here
                                </Link>
                                .
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
)};

export default SignUp;
