import styled from "styled-components";

export interface EmojiBulletProps {
  bullet: string;
}
const EmojiBulletList = styled.ul<EmojiBulletProps>`
  list-style-type: "${(props) => props.bullet}  ";
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const EmojiBulletItem = <Props extends EmojiBulletProps>(
  props: Props
) => (
  <EmojiBulletList bullet={props.bullet}>
    <li {...props} />
  </EmojiBulletList>
);
