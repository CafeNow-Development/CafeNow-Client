import { AppProps } from "next/app";

import { GlobalStyle } from "../style/GlobalStyle";
import { GlobalFonts } from "../style/Fonts/fonts";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Component {...pageProps} />
    </>
  );
}

export default App;
