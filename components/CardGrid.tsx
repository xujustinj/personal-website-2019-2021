import styled from "styled-components";
import { Item } from "../model/Item";
import { Card } from "./Card";

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  justify-content: center;
  margin: auto;
  grid-template-columns: repeat(auto-fit, 200px);
`;

export interface CardGridProps {
  items: ReadonlyArray<Item>;
}
export const CardGrid = ({ items }: CardGridProps) => (
  <Grid>
    {items.map((item) => (
      <Card key={item.name} size={200} item={item}></Card>
    ))}
  </Grid>
);
