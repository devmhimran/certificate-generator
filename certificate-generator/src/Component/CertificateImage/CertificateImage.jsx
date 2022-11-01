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
        <div className='design__01__container ' style={{ backgroundImage: `url(${certificateDefaultData?.img})` }}>
            {/* <div className="certificate__image">
                <img src={certificateDefaultData?.img} alt="" />
            </div> */}
            <div className="design__01__certificate__heading ">
                <h2 className='design__01__certificate__heading__text bg-clip-text
  bg-gradient-to-r from-indigo-500 to-pink-500 '>{heading ? heading : 'Certificate'}</h2>
                <h4 className='design__01__certificate__sub__heading__text text-center'>of appreciation</h4>
            </div>
        </div>
    );
};

export default CertificateImage;