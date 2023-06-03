import React from 'react';
import tw from 'tailwind-styled-components';

import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { on } from 'events';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Rider = (props) => {

  const router = useRouter();
  const [car, setCar] = useState([]);
    const [data, setData] = useState([])
  const getCard = async () => {
 
    try {

        const res = await axios.get('https://click-master.onrender.com/api/v1/users/cardData'

        );
        console.log(res.data.data)
        if(res.data.success){
          setData(res.data.data)
        
      }
      
  } 
   catch (error) {
     
      console.log(error);

  }
 
};
useEffect(() => {
   
    getCard();
  
}, [])


  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelection = (id) => {
    setSelectedCar(id);
    router.push({
      pathname: '/Usercard',
      query: {
        pick: props.pickup,
        sdate: props.sdate,
        edate: props.edate,
        detail: id,
      },
    });
  };

  return (
    <Wrapper>
      <Title>select your Event</Title>
      <CarList>
        {data.map((data) => (
          <Car
            key={data?._id}
            onClick={() => handleCarSelection(data?.title)}
          >
            <CarImg src={data.image} />
            <CarDetails>
              <Service>{data.title}</Service>
              <Price>Rs 52.00</Price>
            </CarDetails>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default Rider;

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`;
const Title = tw.h1`
  text-gray-500 text-center text-xs py-2 border-b
`;
const CarList = tw.div`
  overflow-y-scroll
`;
const Car = tw.button`
  flex p-4 items-center justify-between border-b cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200 w-full text-left
`;
const CarImg = tw.img`
  h-10 mr-4
`;
const CarDetails = tw.div`
  flex-1 
`;
const Price = tw.div`
  text-sm
`;
const Service = tw.div`
  font-medium
`;
