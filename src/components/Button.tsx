import styled from "@emotion/styled";

interface IButtonProps {
  isSuccess: boolean;
  onClick?: () => void;
}

export const Button = styled("button")<IButtonProps>`
  all: unset;
  text-align: center;
  border-radius: 16px;
  padding: 12px 28px;
  font-weight: bold;
  background-color: ${(props) => (!props.isSuccess ? "#D61C4E" : "#FEDB39")};
  color: ${(props) => (!props.isSuccess ? "white" : "black")};
  cursor: pointer;
`;
