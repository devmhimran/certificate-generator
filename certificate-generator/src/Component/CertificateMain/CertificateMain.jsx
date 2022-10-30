import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';

const CertificateMain = () => {
    const imageApi = 'ef367f576eca302d4916e3889c6e0cc6';
    const handleImage = (e) =>{
        const photoURL = e.target.files[0];
        const formData = new FormData();
        formData.append('image', photoURL);
        console.log(photoURL)
    }
    return (
        <div className='certificate__main'>
            <div className="grid grid-cols-6 gap-4">
                <div className="design__select border-r">

                </div>
                <div className="design__preview col-span-4 flex justify-center items-center h-[89vh]">
                    <div className="card w-10/12 border shadow">
                        <img className='w-full' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484" alt="" />
                    </div>
                </div>
                <div className="certificate__details px-4 py-8 border-l">
                    <div className="input__form">
                        <div className="input__detail my-8">
                            <Input label="Heading" name='heading' />
                        </div>
                        <div className="input__detail my-8">
                            <Input label="Participant Name" name='participantName' />
                        </div>
                        <div className="input__detail my-8">
                            <Textarea variant="outlined" label="Description" name='description' />
                        </div>
                        <div className="input__detail my-8">
                            <Input label="Author Name" name='authorName' />
                        </div>
                        <div className="input__detail my-8">
                            <label className="block cursor-pointer">
                                <span className="sr-only">Logo</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                "
                                onChange={handleImage}
                                name='logo'
                                />
                            </label>
                        </div>
                        <div className="input__detail my-8">
                            <Button fullWidth>Export As Pdf</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateMain;