import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout'

import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');  

  }, []);

  return  <Layout>
            <Component {...pageProps} />  
          </Layout> 
}

export default MyApp
