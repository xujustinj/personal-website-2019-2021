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
    mobile: `
      padding-left: max(calc(100% / 18), 16px);
      padding-right: max(calc(100% / 18), 16px);
      padding-top: 32px;
      padding-bottom: 32px;
    `,
    desktop: `
      padding-left: calc(100% / 6);
      padding-right: calc(100% / 6);
      padding-top: 48px;
      padding-bottom: 48px;
    `,
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
