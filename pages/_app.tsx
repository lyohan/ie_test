import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
