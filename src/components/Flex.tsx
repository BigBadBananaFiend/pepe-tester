import styled from "@emotion/styled";
import { IFlexContainerProps } from "./types";

export const Flex = styled("div")<IFlexContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction ?? "column"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`;

/* 1CD6CE FEDB39 D61C4E */
