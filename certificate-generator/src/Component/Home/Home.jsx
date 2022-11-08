import { Card, CardBody } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devmhimran/dummy-api/main/Certificate-Api/certificate.json')
            .then(function (res) {
                setData(res.data)
            })
    }, [])
    return (
        <div className='h-[90vh]'>

            <div className="">
                <Marquee speed={50} gradient={false} className='mt-4' pauseOnClick={true}>
                    {
                        data.map(certificateImage =>
                            <Card className='w-1/5 my-3 mx-16'>

                                <CardBody className="text-center">
                                    <img className='' src={certificateImage.preview} alt="" />
                                </CardBody>

                            </Card>
                        )
                    }
                </Marquee>
            </div>
            <div className="start__link text-center py-6">
                <Link to="certificate-generator" className='px-6 py-2 border-2 border-black font-semibold text-xl text-black hover:bg-black hover:text-white'>
                    Let's Start <BsArrowRight className='ml-1 inline text-2xl mb-1' /></Link>
            </div>
        </div>
    );
};

export default Home;