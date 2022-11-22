import styled from "@emotion/styled";
import { useState, forwardRef } from "react";
import { IInputProps } from "./types";

const StyledInput = styled("input")`
  all: unset;
  border: 3px solid black;
  border-radius: 16px;
  padding: 8px 16px;
  color: black;
  width: 80%;
  ::placeholder {
    color: black;
  }
  &:focus {
    border: 3px solid #d61c4e;
  }
`;

export const Input: React.FC<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(({ placeholder }: IInputProps, ref) => {
  // The state can live here for now, the value is never really used for anything yet
  const [inputValue, setInputValue] = useState<string>("");

  const handleSetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledInput
      ref={ref}
      type={"text"}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleSetInputValue}
    />
  );
});
