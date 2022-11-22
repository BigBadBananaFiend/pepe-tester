import {
  Button,
  Flex,
  ContentWrapper,
  RevenueBtn,
  Redirect,
  StepWrapper,
  ShowCurrentRevenue,
} from "../components";
import { useContext } from "react";
import { CurrentRevenueContext } from "../Routes";
import Pepe from "../img/excited.png";
import Backward from "../img/backward.png";
import Forward from "../img/forward.png";
import Smartlook from "smartlook-client";

export const SecondStep: React.FC = () => {
  const revenue = "20";
  const currentRevenue = useContext(CurrentRevenueContext);

  const handleCustomButtonEventWithPropsClick = () => {
    Smartlook.track("custom-button-click-w-props", {
      name: "Event with props",
      description: "Event with props was triggered",
    });
  };

  return (
    <StepWrapper pepeVariant={Pepe} revenueValue={revenue}>
      <h1>We're almost there!</h1>
      <p style={{ cursor: "pointer" }}>Text to be clicked on!</p>
      <Flex direction="row" gap="20px">
        <Button
          isSuccess={true}
          onClick={handleCustomButtonEventWithPropsClick}
        >
          Custom event with props
        </Button>
        <Button id="custom-button-id-selector" isSuccess={true}>
          Click on custom css selector
        </Button>
      </Flex>
      <Flex direction="row" width="100%" justifyContent="space-around">
        <Redirect url={"/"} icon={Backward} />
        <Redirect url={"/final-step"} icon={Forward} />
      </Flex>
      <ShowCurrentRevenue currentRevenue={currentRevenue.revenue} />
    </StepWrapper>
  );
};
