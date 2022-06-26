import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { Colour } from "../styles/Colours";

config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
* {
  font-family: "IBM Plex Sans", sans-serif;
  box-sizing: border-box;
}

@font-face {
  font-family: "Clear Sans";
  src: url("/fonts/clear-sans.bold.ttf");
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
      <Footer
        background={Colour({ h: "blue", s: "faded", v: "dark" })}
        foreground="white"
      />
    </>
  );
}

export default App;
