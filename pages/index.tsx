import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "IBM Plex Sans", sans-serif;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Justin Xu</title>
      </Head>
    </>
  );
}
