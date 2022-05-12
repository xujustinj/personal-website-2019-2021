import type { AppProps } from "next/app";
import Head from "next/head";

import NavBar from "../components/NavBar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Justin Xu</title>
      </Head>
      <NavBar {...pageProps}>Justin Xu</NavBar>
      <Component {...pageProps} />
    </>
  );
}

export default App;
