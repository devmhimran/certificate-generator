import React from 'react';

const CertificateImage = ({data}) => {
    // const {img} = data;
    return (
        <div>
            <img className='w-full' src={data} alt="" />
        </div>
    );
};

export default CertificateImage;