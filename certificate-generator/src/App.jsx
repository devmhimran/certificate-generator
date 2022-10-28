import { Button } from '@material-tailwind/react'
import React, { useRef, useState } from 'react'
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import CardItem from './Component/CardItem/CardItem'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Alert,
} from "@material-tailwind/react";


const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} className=''><CardItem data={props.data} /></div>

  // <div ref={ref} className='bg-yellow-200'>
  //   <Card className="w-96 mx-auto">
  //     <CardHeader floated={false} color="blue" className={`relative h-56 ${props.data}`}>
  //       <img
  //         src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //         alt="img-blur-shadow"
  //         className="h-full w-full "
  //       />
  //     </CardHeader>
  //     <CardBody className="text-center">
  //       <Alert>A simple alert for showing message.</Alert>;
  //       <Typography variant="h5" className="mb-2">
  //         Cozy 5 Stars Apartment
  //       </Typography>
  //       <Typography>
  //         The place is close to Barceloneta Beach and bus stop just 2 min by
  //         walk and near to "Naviglio" where you can enjoy the main night life in
  //         Barcelona.
  //       </Typography>
  //     </CardBody>
  //     <CardFooter divider className="flex items-center justify-between py-3">
  //       <Typography variant="small">$899/night</Typography>
  //       <Typography variant="small" color="gray" className="flex gap-1">
  //         <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
  //         Barcelona, Spain
  //       </Typography>
  //     </CardFooter>
  //   </Card>
  // </div>
));

function App() {

  const exportComponent = useRef();
  const [rightClick, setRightClick] = useState('');
  const handleRight = () => {
    setRightClick('rotate-45')
  }

  return (
    <div className="App w-full">
      <div className="container mx-auto max-w-screen-xl">
        <div className='py-8'>
          <Button onClick={() => exportComponentAsJPEG(exportComponent)} className='mx-4'>Image</Button>
          <Button onClick={() => exportComponentAsPDF(exportComponent)} className='mx-4'>Pdf</Button>
          <Button onClick={() => exportComponentAsPNG(exportComponent)} className='mx-4'>Png</Button>

        </div>
        <ComponentToPrint data={rightClick} ref={exportComponent} />

        <div className='pt-8'>
          <Button onClick={handleRight} className='mx-4'>Right</Button>
        </div>
      </div>
    </div>
  )
}

export default App
