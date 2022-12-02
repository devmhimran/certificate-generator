import { CardFooter } from '@material-tailwind/react';
import React from 'react';

const SocialLogin = () => {
    return (
        <CardFooter divider className="flex items-center justify-center py-3">
            <button className='py-3 shadow px-8 rounded flex items-center'><FcGoogle className='mr-2' /> Login with google</button>
        </CardFooter>
    );
};

export default SocialLogin;