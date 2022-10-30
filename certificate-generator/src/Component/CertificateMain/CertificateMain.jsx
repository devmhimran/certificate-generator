import { Input } from '@material-tailwind/react';
import React from 'react';

const CertificateMain = () => {
    return (
        <div className='certificate__main'>
            <div className="grid grid-cols-6 gap-4">
                <div className="design__select border-r">

                </div>
                <div className="design__preview col-span-4 flex justify-center items-center h-[89vh]">
                    <div className="card w-[850px] border shadow">
                        <img className='w-[850px]' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-design-template-c46b6dc447f94b068a04728bd695cc4c_screen.jpg?ts=1608659484" alt="" />
                    </div>
                </div>
                <div className="certificate__details px-3 py-8 border-l">
                    <div className="input__form">
                        <div className="input__detail">
                            <Input label="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateMain;