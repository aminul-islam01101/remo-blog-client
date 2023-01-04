// /* eslint-disable jsx-a11y/label-has-associated-control */
// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable no-shadow */
// /* eslint-disable jsx-a11y/anchor-is-valid */

// import { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
// import { FcGoogle } from 'react-icons/fc';

// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import AuthContext from '../../Contexts/AuthContext';
// import setAuthToken from './components/SetAuthToken';

// const Login = () => {
//     const [error, setError] = useState('');

//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//         getValues,
//     } = useForm({ mode: 'onChange' });
//     const { signIn, sendPassResetEmail, setLoading, googleSignIn } = useContext(AuthContext);
//     const { email } = getValues();

//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/';

//     const onSubmit = (data) => {
//         setError('');
//         fetch(`${process.env.REACT_APP_URL}/user?email=${data?.email}`, {
//             headers: {
//                 'content-type': 'application/json',
//             },
//         })
//             .then((res) => res.json())
//             .then((response) => {
//                 if (response?.user?.email) {
//                     signIn(data?.email, data?.password)
//                         .then((result) => {
//                             const { user } = result;
//                             console.log(user);
//                             setAuthToken(user);

//                             navigate(from, { replace: true });
//                         })

//                         .catch((error) => {
//                             console.log(error.message);
//                             setError(error.message);
//                         });
//                 } else {
//                     toast.error('Invalid user.Please sign up first');
//                 }
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     };
//     const handleForgetPass = () => {
//         if (!email) {
//             alert('please enter a valid email');
//             return;
//         }
//         sendPassResetEmail(email)
//             .then(() => {
//                 toast.success('reset email sent.Please check your email');
//             })
//             .catch((er) => {
//                 console.error(er);
//             });
//     };
//     // handle google sign in
//     const handleGoogleSignIn = () => {
//         googleSignIn()
//             .then((result) => {
//                 const { user } = result;
//                 console.log(user);
//                 setAuthToken({ ...user });
//                 user?.uid && navigate(from, { replace: true });
//                 //  saveUser(user.email, user.displayName);
//                 // setUserEmail(user?.email);
//             })

//             .catch((errors) => {
//                 console.error(errors);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     };

//     return (
//         <div className="">
//             <div className="grid min-h-90v place-items-center  text-accent  ">
//                 <h2 className="text-xl text-rose-600 font-bold my-10">{error}</h2>
//                 <div className="w-full max-w-md space-y-3 rounded-xl p-8 bg-primary">
//                     <h1 className="text-center text-2xl font-bold">Login</h1>
//                     <form
//                         onSubmit={handleSubmit(onSubmit)}
//                         className="ng-untouched ng-pristine ng-valid space-y-6"
//                     >
//                         <div className="form-control w-full">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter Your email"
//                                 {...register('email', {
//                                     required: '*Email Address is required',
//                                 })}
//                                 className="w-full  input py-2 input-bordered bg-error text-accent"
//                             />
//                             {errors.email && (
//                                 <p className="text-red-600">{errors.email?.message}</p>
//                             )}
//                         </div>
//                         <div className="form-control w-full ">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 placeholder="Type Your PassWord"
//                                 type="password"
//                                 {...register('password', {
//                                     required: '*Password is required',
//                                     minLength: {
//                                         value: 6,
//                                         message: 'Password must be 6 characters or longer',
//                                     },
//                                 })}
//                                 className="w-full  input py-2 input-bordered bg-error text-accent "
//                             />
//                             {errors.password && (
//                                 <p className="text-red-600">{errors.password?.message}</p>
//                             )}
//                         </div>
//                         <div className="flex justify-end text-xs dark:text-gray-400">
//                             Forgot Password?
//                             <button type="button" className="underline" onClick={handleForgetPass}>
//                                 Reset
//                             </button>
//                         </div>
//                         <button type="submit" className="button w-full">
//                             Login
//                         </button>
//                     </form>
//                     <div className="flex items-center space-x-1">
//                         <div className="h-px flex-1 dark:bg-gray-700 sm:w-16" />

//                         <div className="px-3 text-sm dark:text-gray-400">
                          
//                             <p className="text-center">or</p> Login with social accounts
//                         </div>
//                         <div className="h-px flex-1 dark:bg-gray-700 sm:w-16" />
//                     </div>
//                     <div >
//                         <button
//                             onClick={handleGoogleSignIn}
//                             type="button"
//                             aria-label="Log in with Google"
//                             className="btn btn-outline w-full flex justify-center text-2xl"
//                         >
//                             <FcGoogle />
//                         </button>
//                     </div>
//                     <p className="text-center text-xs  sm:px-6">
//                         Dont&#39;s have an account?
//                         <Link to="/signup" rel="noopener noreferrer" className="underline ">
//                             Sign up
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { BsDiscord, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';
import loginLogo from '../../assets/images/IllustrationLogin.png';
import setAuthToken from './components/SetAuthToken';

const SignIn = () => {
    const [error, setError] = useState('');

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm({ mode: 'onChange' });
    const { signIn, sendPassResetEmail, setLoading, googleSignIn } = useContext(AuthContext);
    const { email } = getValues();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const onSubmit = (data) => {
        setError('');
        fetch(`${process.env.REACT_APP_URL}/user?email=${data?.email}`, {
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((response) => {
                if (response?.user?.email) {
                    signIn(data?.email, data?.password)
                        .then((result) => {
                            const { user } = result;
                            console.log(user);
                            setAuthToken(user);

                            navigate(from, { replace: true });
                        })

                        .catch((error) => {
                            console.log(error.message);
                            setError(error.message);
                        });
                } else {
                    toast.error('Invalid user.Please sign up first');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleForgetPass = () => {
        if (!email) {
            alert('please enter a valid email');
            return;
        }
        sendPassResetEmail(email)
            .then(() => {
                toast.success('reset email sent.Please check your email');
            })
            .catch((er) => {
                console.error(er);
            });
    };

    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const { user } = result;
                console.log(user);
                setAuthToken({ ...user });
                user?.uid && navigate(from, { replace: true });
                //  saveUser(user.email, user.displayName);
                // setUserEmail(user?.email);
            })

            .catch((errors) => {
                console.error(errors);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className="bg-white py-10 ">
            {/* <div className="lg:grid lg:min-h-screen lg:grid-cols-12 w-full"> */}
            <div className="flex container flex-col-reverse md:flex-row w-full gap-10 justify-between">
                <div
                    aria-label="Main"
                    className="flex items-center justify-center  py-8  lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6  "
                    // className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6  "
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block">
                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome Back !
                            </h1>
                            <span className="text-xs text-gray-400">
                                Everyday is a new day we are glad to have you back !
                            </span>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            action="#"
                            className="mt-8 grid grid-cols-6 gap-6"
                        >
                            <div className="col-span-6">
                                <label
                                    htmlFor="Email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                    {...register('email', {
                                        required: '*Email Address is required',
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-600">{errors.email?.message}</p>
                                )}
                            </div>

                            <div className="col-span-6">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                    {...register('password', {
                                        required: '*Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be 6 characters or longer',
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-600">{errors.password?.message}</p>
                                )}
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="MarketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />
                                    <div className="flex justify-between w-full">
                                        <span className="text-sm text-gray-700">
                                            Stay logged in
                                        </span>

                                        <button
                                            type="button"
                                            className="text-sm text-gray-700"
                                            onClick={handleForgetPass}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                </label>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center flex-col sm:gap-4 justify-center items-center">
                                <div className='grid place-items-center'>
                                    <button
                                        type="submit"
                                        className= " inline-block shrink-0 rounded-md border border-blue-600 px-4 text-2xl py-3 font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        <IoIosArrowForward />
                                    </button>
                                </div>

                                <div className="flex items-center pt-4 space-x-1">
                                    <div className="flex-1 h-px lg:w-40 bg-gray-700" />
                                    <p className="px-3 text-sm dark:text-gray-400">Or</p>
                                    <div className="flex-1 h-px lg:w-40 bg-gray-700" />
                                </div>
                                <p className="mt-4 text-sm font-semibold sm:mt-0">
                                    First time here?
                                    <Link to="/signup" className="text-red-500">
                                  
                                        Register now
                                    </Link>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="flex flex-col md:w-1/2 items-center  col-span-6 justify-center">
                 <div className=''>   <img
                        alt="Night"
                        src={loginLogo}
                        className=" h-full w-full  object-cover"
                    /></div>
                    <div>
                        <div className="grid grid-cols-4 place-items-center space-x-3">
                            <BsDiscord className="text-xl" />
                            <BsLinkedin className="text-xl" />
                            <BsInstagram className="text-xl" />
                            <BsTwitter className="text-xl" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default SignIn;
