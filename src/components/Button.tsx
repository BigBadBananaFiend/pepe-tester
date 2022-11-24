import styled from "@emotion/styled";
import { IButtonProps } from "./types";

export const Button = styled("button")<IButtonProps>`
  all: unset;
  text-align: center;
  border-radius: 16px;
  padding: 12px 28px;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: pointer;
`;

// "#D61C4E" : "#FEDB39"
