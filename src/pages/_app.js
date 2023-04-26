import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "mapbox-gl/dist/mapbox-gl.css"
import Sidenav from './Sidenav'
import tw from "tailwind-styled-components"
export default function App({ Component, pageProps }) {

  return (
    <Wrapper>
     <Sidenav/>
    <Component {...pageProps} />
    </Wrapper>
  ) 
}

const Wrapper = tw.div`
h-full w-full overflow-hidden 
`

