import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import MapComponent from '../Components/Map';
import { useRouter } from 'next/router';
import Rider from './Rider';
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter();

  const { pick, sdate, edate } = router.query;
  const [pickup, setPickup] = useState();

  const getPickupCoordinates = (pick) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoicGFydmVlbjIzIiwiYSI6ImNsZ254a29rMDAwaGgzaW1yaWJwMWJ6Mm4ifQ.3VxAjPvVhzv24X-pHvCG_g',
        })
    )
      .then((response) => response.json())
      .then((data) => {
        const coordinates = data.features[0].center;
        setPickup(coordinates);
      })
      .catch((error) => {
        console.error('Error fetching pickup coordinates:', error);
      });
  };

  useEffect(() => {
    if (pick) {
      getPickupCoordinates(pick);
    }
  }, [pick]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BacKButton src="https://img.icon8.com/ios-filled/50/000000/left.png" alt="Back" />
        </Link>
      </ButtonContainer>
      <MapComponent pickup={pickup} />
      <RideContainer>
        <Rider pickup={pick} sdate={sdate} edate={edate} />
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`;
const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ConfirmButton = tw.div`
  bg-black text-white text-center my-4 mx-4 py-4 rounded-lg text-xl
`;
const ConfirmButtonContainer = tw.div`
  border-t-2
`;
const ButtonContainer = tw.div`
  rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BacKButton = tw.img`
  h-full object-contain
`;
