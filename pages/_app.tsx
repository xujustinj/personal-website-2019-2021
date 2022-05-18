import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "IBM Plex Sans", sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
`;

function App({ Component, pageProps }: AppProps) {
  const title = pageProps?.title;
  return (
    <>
      <Head>
        <title>
          {title !== undefined ? `${title} - Justin Xu` : "Justin Xu"}
        </title>
      </Head>
      <GlobalStyle />
      <NavBar {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
