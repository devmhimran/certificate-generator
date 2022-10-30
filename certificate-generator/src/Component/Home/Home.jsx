import React from 'react';
import CertificateMain from '../CertificateMain/CertificateMain';
import NavMenu from '../NavMenu/NavMenu';

const Home = () => {
    return (
        <div className='h-[90vh]'>
            <NavMenu/>
            <hr />
            <CertificateMain/>
        </div>
    );
};

export default Home;