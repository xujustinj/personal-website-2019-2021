import styled from "styled-components";
import { adapt } from "../styles/Adaptive";
import { navBarHeight } from "./NavBar";

export interface ScreenProps {
  foreground: string;
  background: string;
}
export const Screen = styled.div<ScreenProps>`
  color: ${(props) => props.foreground};
  background: ${(props) => props.background};
  ${adapt({
    mobile: `padding: 16px max(calc(100vw / 18), 16px);`,
    desktop: `padding: 16px calc(100vw / 6);`,
  })}
  height: calc(100vh - ${navBarHeight});
  display: flex;
  align-items: center;
  justify-content: center;
`;
