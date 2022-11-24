import styled from "@emotion/styled";
import { IFlexContainerProps } from "./types";
import { Flex } from "./Flex";

// I stole the shadow I don't enjoy doing them very much :(
export const ContentWrapper = styled(Flex)<IFlexContainerProps>`
  flex: 1 1 auto;
  padding: 40px 20px;
  margin: auto;
  border-radius: 16px;
  background-color: white;
  max-width: 720px;
  height: 560px;
  gap: 24px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const AppWrapper = styled("div")`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  background-color: #293462;
`;

export const StepContentWrapper = styled(Flex)`
  animation: fadeIn 0.4s linear;
  animation-fill-mode: forwards;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
`;
