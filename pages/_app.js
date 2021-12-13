import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'
import store from '../store/store'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');  

  }, []);

  return  <Layout local="polski" store={store}>
            <Component {...pageProps} />  
          </Layout> 
}

export default MyApp
