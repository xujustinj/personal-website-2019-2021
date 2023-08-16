import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { CardGrid } from "../components/CardGrid";
import { EmojiBulletItem } from "../components/EmojiBullet";
import { Section, SectionHeading } from "../components/Section";
import { Items } from "../data/Items";
import ProfileMetrotown from "../public/assets/profile-metrotown.jpg";
import { adapt } from "../styles/Adaptive";
import { Colour } from "../styles/Colours";

const IntroContainer = styled.div`
  display: flex;
  ${adapt({
    mobile: `
      flex-direction: column;
    `,
    desktop: `
      flex-direction: row;
    `,
  })}
  gap: 24px;
  align-items: center;
`;

const IntroIcon = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: min(200px, 40vw);
  height: min(200px, 40vw);
  border-radius: 8px;
  overflow: hidden;
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  gap: 8px;
`;

const HelloText = styled.h2`
  ${adapt({
    mobile: `
      font-size: 24pt;
    `,
    desktop: `
      font-size: 30pt;
    `,
  })}
  line-height: 100%;
  margin: 0;
`;

const IntroText = styled.p`
  ${adapt({
    mobile: `
      font-size: 12pt;
    `,
    desktop: `
      font-size: 14pt;
    `,
  })}
  margin: 0;
`;

const Home = () => (
  <>
    <Section
      foreground="white"
      background={Colour({ h: "blue", s: "muted", v: "light" })}
      id="intro"
    >
      <IntroContainer>
        <IntroIcon>
          <Image
            src={ProfileMetrotown}
            alt={"Picture of Justin"}
            width={200}
            height={200}
          />
        </IntroIcon>
        <IntroContent>
          <HelloText>Hi!👋🏼</HelloText>
          <IntroText>
            My name is <b>Justin</b> (he/him), and this is where I show off{" "}
            everything{" "}
            <del style={{ color: Colour({ v: "lighter" }) }}>
              I want employers to know
            </del>{" "}
            about me.
          </IntroText>
        </IntroContent>
      </IntroContainer>
    </Section>

    <Section foreground="black" background="white" id="iam">
      <SectionHeading>{"I'm..."}</SectionHeading>
      <EmojiBulletItem bullet={"🎓"}>
        <IntroText>
          an incoming Computer Science masters student at UWaterloo
        </IntroText>
      </EmojiBulletItem>
      <EmojiBulletItem bullet={"💻"}>
        <IntroText>
          proficient in web development,{" "}
          <Link
            href={
              "https://medium.com/@xujustinj/my-favourite-tech-stack-is-google-sheets-79a797887b80"
            }
          >
            spreadsheet hacking
          </Link>
          , and more
        </IntroText>
      </EmojiBulletItem>
      <EmojiBulletItem bullet={"🧐"}>
        <IntroText>
          a perfectionist who takes too much ownership (haters call it
          workaholism)
        </IntroText>
      </EmojiBulletItem>
      <EmojiBulletItem bullet={"🕹️"}>
        <IntroText>bad at video games and bouldering</IntroText>
      </EmojiBulletItem>
      <EmojiBulletItem bullet={"🎹"}>
        <IntroText>something of a musician myself</IntroText>
      </EmojiBulletItem>
      <EmojiBulletItem bullet={"🎂"}>
        <IntroText>
          <Link href={"https://youtu.be/42Gtm4-Ax2U"}>twenty-three</Link>
        </IntroText>
      </EmojiBulletItem>
    </Section>

    <Section
      foreground="black"
      background={Colour({ h: "green", s: "faded", v: "light" })}
      id="doing"
    >
      <SectionHeading>Current Stuff</SectionHeading>
      <CardGrid items={Items.filter((item) => item.status === "ongoing")} />
    </Section>

    <Section
      foreground="black"
      background={Colour({ h: "green", s: "faded", v: "lighter" })}
      id="did"
    >
      <SectionHeading>Past Stuff</SectionHeading>
      <CardGrid items={Items.filter((item) => item.status === "ended")} />
    </Section>
  </>
);

export default Home;
