import { Card, CardBody } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

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
            <div className="start__link text-center">
                <Link to="certificate-generator">Let's Start</Link>
            </div>
        </div>
    );
};

export default Home;