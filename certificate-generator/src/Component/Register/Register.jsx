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
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useState } from 'react';

const Register = () => {
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(
        auth
      );
    const imageApi = 'ef367f576eca302d4916e3889c6e0cc6';
    const [profileImage, setProfileImage] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.profileImg.files[0];
        const photoURLImg = e.target.profileImg.files[0];
        const formData = new FormData();
        formData.append('image', photoURLImg);
        console.log(photoURL)
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imageApi}`;
        fetch(imgUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const profileImg = result.data.image.url;
                // console.log(profileImage)
                setProfileImage(profileImg)
                
            })

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        await updateProfile({photoURL: profileImage});
        await sendEmailVerification();
    }
    if(user) {
        console.log(user)
    }
    return (
        <div className='container mx-auto h-[90vh] flex items-center justify-center'>
            <Card className="w-96">
                <CardBody className="text-center">
                    <h1 className='text-center text-2xl font-semibold text-black mb-6'>Register</h1>
                    <form onSubmit={handleRegister}>
                        <div className="w-full my-5">
                            <Input label="Name" name='name' />
                        </div>
                        <div className="w-full my-5">
                            <Input label="Username or Email" name='email' />
                        </div>
                        <div className="w-full my-5">
                            <Input label="Password" name='password' />
                        </div>
                        <div className="w-full my-5">
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-1.5 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100 cursor-pointer
                            " name='profileImg'
                            />
                        </div>
                        <div className="w-full my-5">
                            <Button fullWidth type='submit'>Register</Button>
                            <div className='mt-2'>
                                <Link to='/login' className='text-sm text-[#1C6DD0]'>Already have account?</Link>
                            </div>
                        </div>
                    </form>
                    <div className='flex items-center justify-center'>
                        <button className='py-2 shadow px-8 rounded flex items-center justify-center'><FcGoogle className='mr-2' /> Login with google</button>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default Register;