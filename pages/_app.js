import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";
import '../styles/globals.css';
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
      chainRpc= {{
      [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/62b68f6870c84d21ae6e919abf8407f1'
    }}
    >
    <ThemeProvider>
    <Component {...pageProps} />
    </ThemeProvider>
  </ThirdwebProvider>
  )
    
    
}

export default MyApp
