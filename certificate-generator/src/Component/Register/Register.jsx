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
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className='container mx-auto h-[90vh] flex items-center justify-center'>
            <Card className="w-96">
                <CardBody className="text-center">
                    <h1 className='text-center text-2xl font-semibold text-black mb-6'>Register</h1>
                    <form>
                        <div className="w-full my-5">
                            <Input label="Name" />
                        </div>
                        <div className="w-full my-5">
                            <Input label="Username or Email" />
                        </div>
                        <div className="w-full my-5">
                            <Input label="Password" />
                            <div className='text-left'>
                                <Link className='text-sm text-[#1C6DD0]'>Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="w-full my-5">
                            <input type="file" class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                        </div>
                        <div className="w-full my-5">
                            <Button fullWidth>Login</Button>
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

export default Register;