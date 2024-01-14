import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { CardGrid } from "../components/CardGrid";
import { EmojiBulletItem } from "../components/EmojiBullet";
import { Section, SectionHeading } from "../components/Section";
import { Items } from "../data/Items";
import ProfileKyoto from "../public/assets/profile-kyoto.jpg";
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
  gap: 32px;
  align-items: top;
`;

const IntroIcon = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  width: min(200px, 40vw);
  height: min(200px, 40vw);
  border-radius: 16px;
  overflow: hidden;
`;

const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  gap: 8px;
  align-items: flex-start;

  ${adapt({
    mobile: `
      font-size: 14pt;
    `,
    desktop: `
      font-size: 16pt;
    `,
  })}

  > * {
    margin: 0;
  }

  a {
    color: inherit
  }
`;

const NameText = styled.h2`
  ${adapt({
    mobile: `
      font-size: 36pt;
    `,
    desktop: `
      font-size: 48pt;
    `,
  })}
  line-height: 100%;
  margin-bottom: 8px;
`;

const Home = () => (
  <>
    <Section
      $foreground="white"
      $background={Colour({ h: "blue", s: "muted", v: "darker" })}
      id="intro"
    >
      <IntroContainer>
        <IntroIcon>
          <Image
            src={ProfileKyoto}
            alt={"Picture of Justin Xu"}
            width={200}
            height={200}
          />
        </IntroIcon>
        <IntroContent>
          <NameText>Justin Xu</NameText>
            <EmojiBulletItem $bullet={"🎓"}>
              Bachelor&apos;s (&apos;23) {'→'} Master&apos;s in Computer Science @UWaterloo
            </EmojiBulletItem>
            <EmojiBulletItem $bullet={"🔎"}>
              researching knowledge graphs with <Link href={"https://cs.uwaterloo.ca/~ppoupart/"}>Prof. Pascal Poupart</Link>
            </EmojiBulletItem>
            <EmojiBulletItem $bullet={"💻"}>
              writing, <Link
                href={
                  "https://medium.com/@xujustinj/my-favourite-tech-stack-is-google-sheets-79a797887b80"
                }
              >
                spreadsheet hacking
              </Link>, web development
            </EmojiBulletItem>
            <EmojiBulletItem $bullet={"🧐"}>
              perfectionist
            </EmojiBulletItem>
            <EmojiBulletItem $bullet={"🕹️"}>
              bad at video games and bouldering
            </EmojiBulletItem>
            <EmojiBulletItem $bullet={"🎂"}>
              <Link href={"https://youtu.be/42Gtm4-Ax2U"}>twenty-three</Link>
            </EmojiBulletItem>
        </IntroContent>
      </IntroContainer>
    </Section>

    <Section
      $foreground="black"
      $background={Colour({ h: "blue", s: "muted", v: "lighter" })}
      id="doing"
    >
      <SectionHeading>Featured Stuff</SectionHeading>
      <CardGrid items={Items.filter((item) => item.status === "featured")} />
    </Section>

    <Section
      $foreground="white"
      $background={Colour({ h: "blue", s: "faded", v: "dark" })}
      id="did"
    >
      <SectionHeading>Other Stuff</SectionHeading>
      <CardGrid items={Items.filter((item) => item.status !== "hidden" && item.status !== "featured")} />
    </Section>
  </>
);

export default Home;
