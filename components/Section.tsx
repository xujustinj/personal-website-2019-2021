import styled from "styled-components";
import { adapt } from "../styles/Adaptive";

export interface SectionProps {
  foreground: string;
  background: string;
}
export const Section = styled.div<SectionProps>`
  color: ${(props) => props.foreground};
  background: ${(props) => props.background};
  ${adapt({
    mobile: `padding: 32px max(calc(100vw / 18), 16px);`,
    desktop: `padding: 48px calc(100vw / 6);`,
  })}
`;

export const SectionHeading = styled.h2`
  ${adapt({
    mobile: `font-size: 18pt;`,
    desktop: `font-size: 24pt;`,
  })}
  font-weight: 700;
  margin-top: 0;
`;
