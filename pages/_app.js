import '../styles/globals.css'

import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from '../Context/StateProvider';
import reducer, { initialState } from '../Context/Reducer';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {

  return( 
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header/>
      <main>
      <Component {...pageProps} />
        <Footer />
      </main>
    </StateProvider>
  )
}

export default MyApp
