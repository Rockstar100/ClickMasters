import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "mapbox-gl/dist/mapbox-gl.css"
import Sidenav from './Sidenav'
import tw from "tailwind-styled-components"
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function App({ Component, pageProps }) {

  return (
    
    <Provider store={store}>
    <Wrapper>
    
    
    <Component {...pageProps} />
   
    </Wrapper>
    </Provider>
   
  ) 
}

const Wrapper = tw.div`
h-full w-full overflow-hidden 
`

