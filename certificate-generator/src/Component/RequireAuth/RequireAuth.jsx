import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div className='container mx-auto text-center h-[90vh] flex justify-center items-center'>
            <div className="card w-80 border">
                <div className="card-body py-5">
                    <p>Your email is not verified</p>
                    <p>Please verify your email</p>
                    <button className='text-[#1C6DD0]' onClick={async () => {
                        await sendEmailVerification();
                        toast.success('Sent Email');
                    }}>Resend</button>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>;
    }
    return children;

};

export default RequireAuth;