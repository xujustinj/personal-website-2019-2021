import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "IBM Plex Sans", sans-serif;
}
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Xu</title>
      </Head>
      <>
        <GlobalStyle />
        <h1>Justin Xu</h1>
      </>
    </>
  );
}
