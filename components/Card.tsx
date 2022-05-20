import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Item } from "../model/Item";
import { adapt } from "../styles/Adaptive";
import { primary } from "../styles/Colours";
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
  background-color: rgba(100%, 100%, 100%, calc(15 / 16));
  color: black;
`;

const CardNameRow = styled.div`
  /* Child Layout */
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    margin: 0;
  }
`;

const CardName = styled.h3`
  /* Font */
  font-weight: 700;
  font-size: 12pt;
`;

const CardLinks = styled.div`
  /* Flex */
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  /* Appearance */
  color: ${primary};
`;

const CardDescription = styled.p`
  /* Sizing */
  flex-grow: 1;

  /* Font */
  font-weight: 400;
  font-size: 9pt;
`;

const CardTags = styled.div`
  /* Flex */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`;

export interface CardProps {
  size: number;
  item: Item;
}
export const Card = ({ size, item }: CardProps) => (
  <CardContainer size={size}>
    <CardIcon src={item.icon} alt={item.name} width={size} height={size} />
    <CardContent className="overlay">
      <CardNameRow>
        <CardName>{item.name}</CardName>
        {item.links === undefined || (
          <CardLinks>
            {item.links.map(({ url, icon }) => (
              <Link href={url}>
                {/* fa-fw: fixed width */}
                <Icon icon={icon} className="fa-fw" />
              </Link>
            ))}
          </CardLinks>
        )}
      </CardNameRow>
      <CardDescription>{item.description}</CardDescription>
      {item.tags === undefined || (
        <CardTags>
          {item.tags.map((tag) => (
            <TagBubble key={tag.name} tag={tag} />
          ))}
        </CardTags>
      )}
    </CardContent>
  </CardContainer>
);

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  justify-content: center;
  margin: auto;
  grid-template-columns: repeat(auto-fit, 200px);
`;
