/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal';

const MakeAdmin = () => {

    const [deleteUser, setDeleteUser] = useState(null);

    const { data: users = [], refetch } = useQuery(['users'], () =>
        axios.get(`${process.env.REACT_APP_URL}/users`).then((res) => res.data)
    );
    const handleClick = (id) => {
        fetch(`${process.env.REACT_APP_URL}/users/admin/${id}`, {
            method: 'PUT',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Making an admin successful.');
                    refetch();
                }
            });
    };
  

 

 
    const handleDelete = (user) => {
        axios
            .delete(`${process.env.REACT_APP_URL}/user/${user._id}`, {
             
            })
            .then((res) => {
                if (res.data.deletedCount) {
                    refetch();
                    toast.success(`User: ${user?.name}s deleted successfully`);
                }
            });
    };
    const closeModal = () => {
        setDeleteUser(null);
    };

    return (
        <div className='bg-white'>
            <div className="container  min-h-screen">
                <div className="overflow-x-auto p-10 shadow-lg ">
                    <table className=" bg-slate-200 text-black w-full">
                        <thead>
                            <tr className='py-2 px-4 shadow-lg'>
                                <th className="py-2 px-4 ">Serial</th>
                                <th> Name</th>
                                <th>email</th>
                                <th>Action</th>
                                <th className='pr-2'>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr
                                    key={user._id}
                                    className="bg-white odd:bg-gray-300 py-2 px-6 text-center shadow-lg"
                                >
                                    <th>{i + 1}</th>
                                    <td className="py-2 px-4">{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td className='px-2'>
                                        {user?.role  || (
                                            <button
                                                type="button"
                                                onClick={() => handleClick(user._id)}
                                                className="button whitespace-nowrap"
                                            >
                                               Make Admin
                                            </button>
                                        )}
                                    </td>
                                    <td className='pr-2'>
                                        {/* <button
                                            type="button"
                                             onClick={() => setDeleteUser(user)}
                                            className="button bg-rose-500"
                                        >
                                            Delete
                                        </button> */}
                                          <button
                                            type="button"
                                            onClick={() => setDeleteUser(user)}
                                            className="button bg-red-500 "
                                        >
                                            <label
                                                className=" cursor-pointer "
                                                htmlFor="confirmation-modal"
                                            >
                                                Delete
                                            </label>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {deleteUser && (
                        <ConfirmationModal
                            title="Are you sure you want to delete?"
                            message={`If you delete ${deleteUser?.name}. It cannot be undone.`}
                            successAction={handleDelete}
                            successButtonName="Delete"
                            modalData={deleteUser}
                            closeModal={closeModal}
                        />
                    )}
            </div>
        </div>
    );
};

export default MakeAdmin;
