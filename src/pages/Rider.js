import React from 'react';
import tw from 'tailwind-styled-components';
import carDetail from "./cardetail";
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { on } from 'events';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-router-dom';

const Rider = (props) => {
  const router = useRouter();
  const [car, setCar] = useState([]);

  useEffect(() => {
    setCar(carDetail);
  }, []);

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
        {carDetail.map((carDetail) => (
          <Car
            key={carDetail.id}
            onClick={() => handleCarSelection(carDetail.title)}
          >
            <CarImg src={carDetail.image} />
            <CarDetails>
              <Service>{carDetail.title}</Service>
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
