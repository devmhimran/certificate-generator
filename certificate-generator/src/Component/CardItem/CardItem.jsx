import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Alert,
} from "@material-tailwind/react";


const CardItem = ({ data }) => {
  // https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  return (
    <div className='w-full'>
      <div className="card w-96 border rounded-lg ">
        <div className="card-body">
          <img className={`rounded-t-lg ${data}`} src="https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="detail p-4">
            <h1>John Doe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eius nisi quibusdam beatae sapiente nam blanditiis, quia vel pariatur at?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;