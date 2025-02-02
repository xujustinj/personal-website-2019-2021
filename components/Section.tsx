import styled from "styled-components";
import { adapt } from "../styles/Adaptive";

export interface SectionProps {
  $foreground: string;
  $background: string;
}
export const Section = styled.div<SectionProps>`
  color: ${(props) => props.$foreground};
  background: ${(props) => props.$background};
  ${adapt({
    mobile: `
      padding-left: max(calc(100% / 18), 16px);
      padding-right: max(calc(100% / 18), 16px);
      padding-top: 32px;
      padding-bottom: 32px;
    `,
    // never wider than the height of the screen
    desktop: `
      padding-left: max(calc(100% / 6), 50vw - 50vh);
      padding-right: max(calc(100% / 6), 50vw - 50vh);
      padding-top: 48px;
      padding-bottom: 48px;
    `,
  })}
`;

export const SectionHeading = styled.h2`
  ${adapt({
    mobile: `font-size: 16pt;`,
    desktop: `font-size: 20pt;`,
  })}
  font-weight: 700;
  margin-top: 0;
`;
