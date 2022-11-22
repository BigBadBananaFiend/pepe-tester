import styled from "@emotion/styled";
import { IFlexContainerProps, IStepWrapperProps } from "./types";
import { Flex } from "./Flex";
import { RevenueBtn } from "./RevenueBtn";

// I stole the shadow I don't enjoy doing them very much :(
export const ContentWrapper = styled(Flex)<IFlexContainerProps>`
  flex: 1 1 auto;
  padding: 60px;
  margin: auto;
  border-radius: 16px;
  background-color: white;
  max-width: 720px;
  min-width: 320px;
  gap: 32px;
  position: relative;
  animation: fadeIn 0.4s linear;
  animation-fill-mode: forwards;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const AppWrapper = styled("div")`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  background-color: #293462;
`;

export const StepWrapper: React.FC<IStepWrapperProps> = ({
  children,
  revenueValue,
  pepeVariant,
}) => (
  <ContentWrapper alignItems="center">
    <RevenueBtn revenueValue={revenueValue} />
    <img src={pepeVariant} alt="pepe" width={"240px"} />
    {children}
  </ContentWrapper>
);
