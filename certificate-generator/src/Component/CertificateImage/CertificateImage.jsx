import React from 'react';
import { useState } from 'react';

const CertificateImage = ({data, designId}) => {

    // const {img} = data;
    console.log(designId)
    const certificateData = [
        {
            "id": "1",
            "name": "design-1",
            "img": "Untitled-1.png"
        },
        {
            "id": "2",
            "name": "design-2",
            "img": "Untitled-2.png"
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
        <div>
            <img className='w-full' src={certificateDefaultData?.img} alt="" />
            {/* {
                certificateData.map(data => data.id === designId ? <img key={data.id} className='w-full' src={data} alt="" /> : '')
            } */}
        </div>
    );
};

export default CertificateImage;