import { Button, Input, Flex, StepWrapper, Redirect } from "../components";
import { useContext } from "react";
import { CurrentRevenueContext } from "../Routes";
import { ShowCurrentRevenue } from "../components";
import Smartlook from "smartlook-client";
import Pepe from "../img/pepe.png";
import Forward from "../img/forward.png";

export const FirstStep: React.FC = () => {
  const revenue = "10";

  const handleThrowError = () => {
    throw new Error("Something went wrong");
  };

  const handleCustomEventBtnClick = () => {
    Smartlook.track("custom-button-click", {});
  };

  const currentRevenue = useContext(CurrentRevenueContext);

  return (
    <StepWrapper pepeVariant={Pepe} revenueValue={revenue}>
      <h1>It's testing time</h1>
      <Input placeholder="Value will be used for the 'Typed Text' filter" />
      <Flex direction="row" gap="16px">
        <Button
          isSuccess={true}
          onClick={handleCustomEventBtnClick}
          id="custom-event-btn"
        >
          Custom event
        </Button>
        <Button
          isSuccess={false}
          onClick={handleThrowError}
          id="throw-an-error-btn"
        >
          Throw an Error
        </Button>
      </Flex>
      <Redirect url={"/second-step"} icon={Forward} id="next" />
      <ShowCurrentRevenue currentRevenue={currentRevenue.revenue} />
    </StepWrapper>
  );
};
