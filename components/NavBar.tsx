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
  $alignment: "start" | "center" | "end";
}
const NavBarSegment = styled.div<NavBarSegmentProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.$alignment};
`;

const LogoContainer = styled(Link)`
  width: fit-content;

  /* Child Layout */
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;

  font-size: 14pt;
  margin: 0;
  text-decoration: none;
  color: white;
`;
const ShieldContainer = styled.span`
  width: 12px;
  height: 18px;
`;
const Logo = () => (
  <LogoContainer href="/">
    Justin
    <ShieldContainer>
      <Image src={Shield} alt={"logo"} width={12} height={18} />
    </ShieldContainer>
    Xu
  </LogoContainer>
);

const PageTitle = styled.h1`
  margin: 0;
  font-size: 16pt;
  white-space: nowrap;
`;

export interface NavBarProps {
  title: string;
}
const NavBar = (props: NavBarProps) => (
  <NavBarContainer>
    <NavBarSegment $alignment="start">
      <Logo />
    </NavBarSegment>
    <NavBarSegment $alignment="center">
      <PageTitle>{props.title}</PageTitle>
    </NavBarSegment>
    <NavBarSegment $alignment="end" />
  </NavBarContainer>
);

export default NavBar;
