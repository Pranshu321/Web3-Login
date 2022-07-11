import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis'
function MyApp({ Component, pageProps }) {
  return(
  <MoralisProvider appId="eMhLTSSwORDh4u6jkzViDcbNrILYJbsTPjgO0kmY" serverUrl="https://qjvym3qzrlqj.usemoralis.com:2053/server">
    {<Component {...pageProps} />}
  </MoralisProvider>);
}

export default MyApp
