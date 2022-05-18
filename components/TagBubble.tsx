import styled from "styled-components";
import { Tag } from "../model/Tag";

const Bubble = styled.span<{
  backgroundColour?: string;
  foregroundColour?: string;
  borderRadiusPx?: number;
}>`
  background-color: ${(props) => props.backgroundColour ?? "black"};
  color: ${(props) => props.foregroundColour ?? "white"};
  border-radius: ${(props) => props.borderRadiusPx ?? 8}px;

  /* Font */
  font-style: normal;
  font-weight: 700;
  font-size: 11px;

  /* Spacing */
  padding: 4px 8px;
  text-align: center;
`;

export interface TagBubbleProps {
  tag: Tag;
}
export const TagBubble = ({ tag }: TagBubbleProps) => (
  <Bubble backgroundColour={tag.colour}>{tag.name}</Bubble>
);
