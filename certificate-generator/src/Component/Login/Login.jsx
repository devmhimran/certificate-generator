import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let loginError;

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    if (error) {
        loginError = error.message;
        console.log(error)
    }
    return (
        <div className='container mx-auto h-[90vh] flex items-center justify-center'>
            <Card className="w-96">
                <CardBody className="text-center">
                    <h1 className='text-center text-2xl font-semibold text-black mb-6'>Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="w-full my-5">
                            <Input label="Email" type='email' name='email' required />
                        </div>
                        <div className="w-full my-5">
                            <Input label="Password" type='password' name='password' required />
                            <small className='text-red-500'>{loginError}</small>
                            <div className='text-left'>
                                <Link className='text-sm text-[#1C6DD0]'>Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="w-full my-5">
                            <Button fullWidth type='submit'>Login</Button>
                            <div className='mt-2'>
                                <Link to='/register' className='text-sm text-[#1C6DD0]'>Create New Account?</Link>
                            </div>
                        </div>
                    </form>
                </CardBody>
                <CardFooter divider className="flex items-center justify-center py-3">
                    <button className='py-3 shadow px-8 rounded flex items-center'><FcGoogle className='mr-2' /> Login with google</button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;