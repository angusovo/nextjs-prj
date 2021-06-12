import '../styles/globals.css'
import Link from "next/link"
import Header from "../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return( 
  <>
    <Header/>
    <main>
    <Component {...pageProps} />
    </main>
  </>
  )
}

export default MyApp
