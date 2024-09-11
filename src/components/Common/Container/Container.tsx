import { CSSProperties } from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div<{ maxwidth?: number }>`
  max-width: ${(props) =>
    `${props.maxwidth}px`}; /* Adjust according to your design */
  margin: 0 auto; /* Center the container horizontally */
  padding: 20px; /* Add some padding around the content */
`;

const Container = ({
  children,
  maxWidth = 1200,
  style,
}: {
  children: JSX.Element | JSX.Element[] | string | number;
  maxWidth?: number;
  style?: CSSProperties;
}) => {
  return (
    <ContainerWrapper maxwidth={maxWidth} style={style}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
