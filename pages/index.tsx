import Head from "next/head";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  font-family: "IBM Plex Sans", sans-serif;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const NavBar = styled.div`
  background-color: black;
  color: white;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Xu</title>
      </Head>
      <>
        <GlobalStyle />
        <NavBar>
          <h1>Justin Xu</h1>
        </NavBar>
      </>
    </>
  );
}
