import styled from "@emotion/styled";
import { useState, forwardRef } from "react";
import { Flex } from "./Flex";
import { IInputProps } from "./types";

const StyledInput = styled("input")`
  all: unset;
  border: 2px solid grey;
  border-radius: 16px;
  padding: 8px 16px;
  color: grey;
  ::placeholder {
    color: grey;
    font-style: italic;
    font-weight: 300;
  }
  &:focus {
    border: 2px solid #d61c4e;
    color: #d61c4e;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const Input: React.FC<IInputProps> = forwardRef<
  HTMLInputElement,
  IInputProps
>(({ placeholder, name }: IInputProps, ref) => {
  // The state can live here for now, the value is never really used for anything yet
  const [inputValue, setInputValue] = useState<string>("");

  const handleSetInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Flex direction="column" width="80%">
      <label htmlFor={name} style={{ marginBottom: "16px" }}>
        Type in a random value:
      </label>
      <StyledInput
        ref={ref}
        type={"text"}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleSetInputValue}
        name={name}
      />
    </Flex>
  );
});
