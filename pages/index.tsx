import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { EmojiBulletItem } from "../components/EmojiBullet";
import { Section, SectionHeading } from "../components/Section";
import * as Items from "../data/Items";
import ProfileMetrotown from "../public/assets/profile-metrotown.jpg";
import { adapt } from "../styles/Adaptive";
import { Hues, muted } from "../styles/Colours";

const HeaderContainer = styled.div`
  display: flex;
  ${adapt({
    mobile: `
      flex-direction: column;
    `,
    desktop: `
      flex-direction: row-reverse;
    `,
  })}
  gap: 16px;
  align-items: center;
`;

const HeaderIcon = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: min(240px, 40vw);
  height: min(240px, 40vw);
  border-radius: 8px;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  gap: 8px;

  * {
    margin: 0;
  }
`;

const HelloText = styled.h2`
  ${adapt({
    mobile: `
      font-size: 24px;
    `,
    desktop: `
      font-size: 32px;
    `,
  })}
`;

export default function Home() {
  return (
    <>
      <Section foreground="white" background={muted(Hues.blue)} id="intro">
        <HeaderContainer>
          <HeaderIcon>
            <Image
              src={ProfileMetrotown}
              alt={"Picture of Justin"}
              width={240}
              height={240}
            />
          </HeaderIcon>
          <HeaderContent>
            <HelloText>Hello! 👋🏼</HelloText>
            <p>
              My name is <b>Justin</b> (he/him), and this is where I show off{" "}
              everything <del>I want employers to know</del> about me.
            </p>
          </HeaderContent>
        </HeaderContainer>
      </Section>

      <Section foreground="black" background="white" id="iam">
        <SectionHeading>{"I'm..."}</SectionHeading>
        <EmojiBulletItem bullet={"🎓"}>
          a 4th year Honours Computer Science student in the co-op program at
          the University of Waterloo (graduating April 2023)
        </EmojiBulletItem>
        <EmojiBulletItem bullet={"💻"}>
          proficient in web development,{" "}
          <Link
            href={
              "https://medium.com/@xujustinj/my-favourite-tech-stack-is-google-sheets-79a797887b80"
            }
          >
            spreadsheet hacking
          </Link>
          , and more
        </EmojiBulletItem>
        <EmojiBulletItem bullet={"🧐"}>
          a perfectionist who takes too much ownership (haters call it
          workaholism)
        </EmojiBulletItem>
        <EmojiBulletItem bullet={"🕹️"}>
          bad at video games and bouldering
        </EmojiBulletItem>
        <EmojiBulletItem bullet={"🎹"}>
          something of a musician myself
        </EmojiBulletItem>
      </Section>

      <Section foreground="white" background={muted(Hues.orange)} id="doing">
        <SectionHeading>Currently Doing</SectionHeading>
        <Card size={240} item={Items.StairwayConstants}></Card>
      </Section>
    </>
  );
}
