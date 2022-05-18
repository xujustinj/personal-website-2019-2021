import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Item } from "../model/Item";
import { adapt } from "../styles/Adaptive";
import { TagBubble } from "./TagBubble";

interface CardContainerProps {
  size: number;
}
const CardContainer = styled.div<CardContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: relative;

  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.5s;

  > .overlay {
    ${adapt({
      mobile: `
        opacity: 1;
        visibility: visible;
      `,
      desktop: `
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s, visibility 0.5s;
      `,
    })}
  }

  :hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    > .overlay {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s, visibility 0s;
    }
  }
`;

const CardIcon = styled(Image)`
  /* Sizing */
  width: 100%;
  height: 100%;

  /* Position */
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const CardContent = styled.div`
  /* Sizing */
  width: 100%;
  height: 100%;

  /* Position */
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  /* Child Layout */
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > * {
    margin: 0;
  }

  /* Appearance */
  background-color: rgba(100%, 100%, 100%, 0.95);
  color: black;
`;

const CardName = styled.h3`
  /* Font */
  font-weight: 700;
  font-size: 16px;
`;

const CardDescription = styled.p`
  /* Sizing */
  flex-grow: 1;

  /* Font */
  font-weight: 400;
  font-size: 12px;
`;

const CardTags = styled.div`
  /* Flex */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export interface CardProps {
  size: number;
  item: Item;
}
export const Card = ({ size, item }: CardProps) => (
  <Link href={item.link}>
    <CardContainer size={size}>
      <CardIcon src={item.icon} alt={item.name} width={size} height={size} />
      <CardContent className="overlay">
        <CardName>{item.name}</CardName>
        <CardDescription>{item.description}</CardDescription>
        <CardTags>
          {item.tags.map((tag) => (
            <TagBubble key={tag.name} tag={tag} />
          ))}
        </CardTags>
      </CardContent>
    </CardContainer>
  </Link>
);
