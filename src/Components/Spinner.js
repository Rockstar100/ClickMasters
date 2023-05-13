
import {ColorRing} from 'react-loader-spinner'
import React from 'react'

const Spinner = () => {
  return (
    <>

    <div className="mx-auto h-screen">
    <ColorRing
    visible={true}
    height="100vh"
    z-index="1000"
    width="10vw"
    allignItems="center"
    justifyContent="center"
    background-color="white"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['black']}
    // colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /></div>
  </>
  )
}

export default Spinner