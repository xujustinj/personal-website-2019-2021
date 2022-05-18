import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { primary } from "../styles/Colours";
import Shield from "../public/assets/shield.svg";

// The NavBar is split into three segments: left, centre, and right.
const NavBarContainer = styled.div`
  /* Sizing */
  width: 100%;
  height: 32px;

  /* Child Layout */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 16px;
  padding-left: 16px;
  padding-right: 16px;

  /* Appearance */
  background-color: ${primary};
  color: white;
`;

interface NavBarSegmentProps {
  alignment: "start" | "center" | "end";
}
const NavBarSegment = styled.div<NavBarSegmentProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment};
`;

const LogoContainer = styled.span`
  width: fit-content;

  /* Child Layout */
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;

  p {
    font-size: 18px;
    margin: 0;
  }

  :hover {
    cursor: pointer;
  }
`;
const ShieldContainer = styled.span`
  width: 12px;
  height: 18px;
`;
const Logo = () => (
  <Link href="/">
    <LogoContainer>
      <p>Justin</p>
      <ShieldContainer>
        <Image src={Shield} width={12} height={18} />
      </ShieldContainer>
      <p>Xu</p>
    </LogoContainer>
  </Link>
);

const PageTitle = styled.h1`
  margin: 0;
  font-size: 18px;
`;

export interface NavBarProps {
  title: string;
}
const NavBar = (props: NavBarProps) => (
  <NavBarContainer>
    <NavBarSegment alignment="start">
      <Logo />
    </NavBarSegment>
    <NavBarSegment alignment="center">
      <PageTitle>{props.title}</PageTitle>
    </NavBarSegment>
    <NavBarSegment alignment="end" />
  </NavBarContainer>
);

export default NavBar;
