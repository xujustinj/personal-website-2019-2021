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
      padding-left: max(10%, 16px);
      padding-right: max(10%, 16px);
      padding-top: 16px;
      padding-bottom: 16px;
    `,
    desktop: `
      padding-left: 20%;
      padding-right: 20%;
      padding-top: 32px;
      padding-bottom: 32px;
    `,
  })}
`;

export const SectionHeading = styled.h2`
  font-size: 18px;
  margin-top: 0;
`;
