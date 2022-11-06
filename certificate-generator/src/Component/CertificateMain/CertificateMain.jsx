import { Avatar, Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import CertificateImage from '../CertificateImage/CertificateImage';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

const CertificateMain = () => {
    const imageApi = 'ef367f576eca302d4916e3889c6e0cc6';
    const [logo, setLogo] = useState('');
    const [badge, setBadge] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [participantName, setParticipantName] = useState('');
    const [heading, setHeading] = useState('');
    const [img, setImage] = useState('');
    const [designId, setDesignId] = useState('');
    const resetFile = useRef();
    const resetBadgeFile = useRef();
    const exportComponent = useRef();

    const data = [
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

    const ComponentToPrint = React.forwardRef((props, ref) => (

        <div ref={ref}>
            <CertificateImage
                data={props.img}
                designId={props.designId}
                certificateDetail={props.certificateDetail} >

            </CertificateImage>
        </div>
    ))



    const certificateDetail = {
        heading,
        participantName,
        description,
        author,
        logo,
        badge
    }

    const handleHeading = (e) => {
        const heading = e.target.value;
        setHeading(heading)
    }
    const handleParticipantName = (e) => {
        const participantName = e.target.value;
        setParticipantName(participantName)
    }
    const handleDescription = (e) => {
        const description = e.target.value;
        setDescription(description);
    }
    const handleAuthorName = (e) => {
        const authorName = e.target.value;
        setAuthor(authorName)
    }
    const handleImage = (e) => {
        const photoURL = e.target.files[0];
        const formData = new FormData();
        formData.append('image', photoURL);
        console.log(photoURL)
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imageApi}`;
        fetch(imgUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const logo = result.data.image.url;
                setLogo(logo);
                // console.log(logo)
            })

    }
    const handleBadge = (e) => {
        const photoURL = e.target.files[0];
        const formData = new FormData();
        formData.append('image', photoURL);
        console.log(photoURL)
        const imgUrl = `https://api.imgbb.com/1/upload?key=${imageApi}`;
        fetch(imgUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((result) => {
                const badge = result.data.image.url;
                setBadge(badge);
                // console.log(logo)
            })

    }
    const handlePreviewClear = () => {
        setLogo('')
        resetFile.current.value = "";
    }
    const handleBadgePreviewClear = () => {
        setBadge('')
        resetBadgeFile.current.value = "";
    }
    const handleDesign = (id, designImage) => {
        // console.log(designId)
        setImage(designImage)
        setDesignId(id)
        // console.log(id)
    }

    return (
        <div className='certificate__main'>
            <div className="grid grid-cols-6">
                <div className="design__select border-r">
                    <div className="design__selection px-4 py-8">
                        {
                            data.map((design, index) =>

                                <div key={index} className="card border shadow rounded-lg my-4" onClick={() => handleDesign(design.id, design.img)}>
                                    <div className="card-body">
                                        <img src={design.img} alt="" />
                                        {/* <p>{design.name}</p> */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="design__preview col-span-4 flex justify-center items-center py-8">
                    <div className="card w-11/12 border shadow relative">
                        <ComponentToPrint
                            data={img}
                            designId={designId}
                            certificateDetail={certificateDetail}
                            ref={exportComponent} />

                    </div>
                </div>
                <div className="certificate__details px-4 py-8 border-l">
                    <div className="input__form">
                        <div className="input__detail my-8">
                            <Input label="Heading" name='heading' onChange={handleHeading} />
                        </div>
                        <div className="input__detail my-8">
                            <Input label="Participant Name" name='participantName' onChange={handleParticipantName} />
                        </div>
                        <div className="input__detail my-8">
                            <Textarea variant="outlined" label="Description" name='description' onChange={handleDescription} />
                        </div>
                        <div className="input__detail my-8">
                            <Input label="Author Name" name='authorName' onChange={handleAuthorName} />
                        </div>
                        <div className="input__detail my-6">
                            <div className='py-3'>Upload Logo</div>
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
                                    ref={resetFile}
                                />
                            </label>
                            {
                                logo ?
                                    <>
                                        <div className="preview__logo relative w-fit">
                                            <Avatar className='border mt-4' src={logo} alt="avatar" size="xxl" />
                                            <span className='absolute top-[6px] right-[-7px] cursor-pointer bg-white rounded-full' onClick={handlePreviewClear}>
                                                <TiDeleteOutline className='text-2xl text-gray-600' />
                                            </span>
                                        </div>
                                    </>
                                    : ''
                            }
                        </div>
                        <div className="input__detail my-6">
                            <div className='py-3'>Upload Badge</div>
                            <label className="block cursor-pointer">
                                <span className="sr-only">Logo</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                "
                                    onChange={handleBadge}
                                    name='badge'
                                    ref={resetBadgeFile}
                                />
                            </label>
                            {
                                badge ?
                                    <>
                                        <div className="preview__logo relative w-fit">
                                            <Avatar className='border mt-4' src={badge} alt="avatar" size="xxl" />
                                            <span className='absolute top-[6px] right-[-7px] cursor-pointer bg-white rounded-full' onClick={handleBadgePreviewClear}>
                                                <TiDeleteOutline className='text-2xl text-gray-600' />
                                            </span>
                                        </div>
                                    </>
                                    : ''
                            }
                        </div>
                        <div className="input__detail my-8">
                            <Button onClick={() => exportComponentAsPNG(exportComponent,{fileName:'image'})}  fullWidth>Export As Png</Button>
                            <Button  onClick={() => exportComponentAsPDF(exportComponent)} color='green' className='mt-4' fullWidth>Export As Pdf</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateMain;