import React from 'react'
import tw from 'tailwind-styled-components'
import {cardetail} from './cardetail'
import { useEffect,useState } from 'react'
import { Typography } from '@mui/material'
import { on } from 'events'
import { useRef } from 'react';

import { useRouter } from 'next/router';

const Rider = () => {
    const router = useRouter();
    const [car,setCar] = useState([]);
    
    useEffect(() => {
        setCar(cardetail)
    },[])
    const [selectedCar,setSelectedCar] = useState(null);
    
    const handleCarSelection = (id)=> {

        setSelectedCar(id)
        router.push(`/${id}`);

    }
    




    
   
    return (
        <Wrapper>
            <Title>select your Event</Title>
            <CarList>
            {cardetail.map((cardetail)=>
            <Car key={cardetail.id
            } onClick={() => handleCarSelection(cardetail.id)}
             
             >
               
            <CarImg src={cardetail.image} />
            <CarDetails>
                <Service>
                    {cardetail.title}
                </Service>
                <Price>
                Rs 52.00
            </Price>
            </CarDetails>

           
        </Car>

            
            )
            }
            
                {/* {cardetail.map(car, index => (

                    <Car key={ index }>
                        
                        
                        <CarImg src= { cardetail.image} />
                        <CarDetails>
                            <Service>{cardetail.title}</Service>
                            <Price> $52.00</Price>
                        </CarDetails>
                        <Time>8:03PM drop off</Time>
                    </Car>
                      ))
        } */}
                    
            
      
            </CarList>
        </Wrapper>
    )
}

export default Rider

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.h1`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.button`
flex p-4 items-center justify-between border-b cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200 w-full text-left
`
const CarImg = tw.img`
h-10 mr-4
`
const CarDetails = tw.div`
flex-1 
`
const Price = tw.div`
text-sm
`
const Service = tw.div`
font-medium
`
