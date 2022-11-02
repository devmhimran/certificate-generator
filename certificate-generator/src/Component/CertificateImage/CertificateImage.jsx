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
            "img": "certificate-01.jpg",
            "headingText": "design__01__certificate__heading__text",
            "subHeading" : "design__01__certificate__sub__heading__text",
            "text01": "design__01__certificate__text__01",
            "participantName": "design__01__certificate__participant__name",
            "divider": "design__01__certificate__divider",
            "description" : "design__01__certificate__description",
            "footer" : "design__01__certificate__footer",
            "logoMain" : "design__01__certificate__logo__main",
            "signatureDivider" : "design__01__certificate__signature__divider",
            "dateDivider" : "design__01__certificate__date__divider",
            "signatureDividerTitle" : "design__01__certificate__signature__divider___title",
            "dateDividerTitle" : "design__01__certificate__date__divider___title"
        },
        {
            "id": "2",
            "name": "design-2",
            "img": "certificate-02.jpg"
        },
    ]
    const certificateDataFind = certificateData.find(data => data.id === designId)
    let certificateDefaultData;
    if(certificateDataFind){
        certificateDefaultData = certificateDataFind;
    }else{
        certificateDefaultData = certificateData[0]
    }
    console.log(certificateDataFind)
    return (
        <div className='design__01__container' style={{ backgroundImage: `url(${certificateDefaultData?.img})` }}>
            {/* <div className="certificate__image">
                <img src={certificateDefaultData?.img} alt="" />
            </div> */}
            <div className="design__01__certificate__main ">
                <h2 className={certificateDefaultData.headingText ? certificateDefaultData.headingText : ''}>{heading ? heading : 'Certificate'}</h2>
                <h4 className={certificateDefaultData.subHeading ? certificateDefaultData.subHeading : ''}>of appreciation</h4>
                <p className={certificateDefaultData.text01 ? certificateDefaultData.text01 : ''}>Proudly presented to:</p>.
                <h3 className={certificateDefaultData.participantName ? certificateDefaultData.participantName : ''}>{participantName ? participantName : 'Name Surname'}</h3>
                <div className={certificateDefaultData.divider ? certificateDefaultData.divider : ''}><hr /></div>
                <p className={certificateDefaultData.description ? certificateDefaultData.description : ''}>
                    {description ? description :'For the successful completion of [course or exam name] on [fill date] in recognition of your continuing excellence in outstanding performance and lasting contribution on "[publisher Name]" '}
                </p>
                <div className={certificateDefaultData.footer ? certificateDefaultData.footer : ''}>
                    <div className="design__01__certificate__signature">
                        <div className={certificateDefaultData.signatureDivider ? certificateDefaultData.signatureDivider : ''}>
                            <hr />
                        </div>
                        <p className={certificateDefaultData.signatureDividerTitle ? certificateDefaultData.signatureDividerTitle : ''}>
                            Your signature
                        </p>
                    </div>
                    <div className="design__01__certificate__logo">
                        <img className={certificateDefaultData.logoMain ? certificateDefaultData.logoMain : ''} src={logo ? logo :'https://i.ibb.co/qWdCRj1/certificat-badge.png'} alt="" />
                    </div>
                    <div className="design__01__certificate__date">
                        <div className={certificateDefaultData.dateDivider ? certificateDefaultData.dateDivider : ''}>
                            <hr />
                        </div>
                        <p className={certificateDefaultData.dateDividerTitle ? certificateDefaultData.dateDividerTitle : ''}>
                            Date of signature
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateImage;