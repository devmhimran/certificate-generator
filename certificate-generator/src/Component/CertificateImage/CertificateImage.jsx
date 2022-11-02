import React from 'react';
import { useState } from 'react';

const CertificateImage = ({data, designId, certificateDetail}) => {
    const { heading,participantName,description,author,logo } = certificateDetail;
    // const {img} = data;
    console.log(designId)
    const certificateData = [
        {
            "id": "1",
            "name": "design-1",
            "img": "certificate-01.jpg"
        },
        {
            "id": "2",
            "name": "design-2",
            "img": "certificate-02.jpg"
        },
    ]
    // console.log(certificateData[0])
    const certificateDataFind = certificateData.find(data => data.id === designId)
    let certificateDefaultData;
    if(certificateDataFind){
        certificateDefaultData = certificateDataFind;
    }else{
        certificateDefaultData = certificateData[0]
    }
    // const certificateDataFind = certificateData.find(data => {
        // if(data.id === designId){
        //     return data
        // }else{
        //     return data[0]
        // }
        // console.log(data[0])
    // })
    // if(designId){
    //     const certificateDataFind = certificateData.find(data => data.id === designId)
    // }else{
    //     const certificateDataFind = certificateData.find(data => "1" === designId)
    // }
    // setDesignData(certificateDataFind)
    console.log(certificateDataFind)
    return (
        <div className='design__01__container' style={{ backgroundImage: `url(${certificateDefaultData?.img})` }}>
            {/* <div className="certificate__image">
                <img src={certificateDefaultData?.img} alt="" />
            </div> */}
            <div className="design__01__certificate__main ">
                <h2 className='design__01__certificate__heading__text'>{heading ? heading : 'Certificate'}</h2>
                <h4 className='design__01__certificate__sub__heading__text text-center'>of appreciation</h4>
                <p className='design__01__certificate__text__01'>Proudly presented to:</p>.
                <h3 className='design__01__certificate__participant__name'>Name Surname</h3>
                <div className='design__01__certificate__divider'><hr /></div>
                <p className='design__01__certificate__description'>
                    For the successful completion of [course or exam name] on [fill date] in recognition of your continuing excellence in outstanding performance and lasting contribution on
                    "[publisher Name]" 
                </p>
                <div className="design__01__certificate__footer">
                    <div className="design__01__certificate__signature">
                        <div className="design__01__certificate__signature__divider">
                            <hr />
                        </div>
                        <p className="design__01__certificate__signature__divider___title">
                            Your signature
                        </p>
                    </div>
                    <div className="design__01__certificate__logo">
                        <img className='design__01__certificate__logo__main' src="https://i.ibb.co/qWdCRj1/certificat-badge.png" alt="" />
                    </div>
                    <div className="design__01__certificate__date">
                        <div className="design__01__certificate__date__divider">
                            <hr />
                        </div>
                        <p className="design__01__certificate__date__divider___title">
                            Your signature
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateImage;