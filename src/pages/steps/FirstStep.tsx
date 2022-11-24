import { Button, Input, Flex } from "../../components";
import Smartlook from "smartlook-client";

export const FirstStep: React.FC = () => {
  const handleThrowError = () => {
    throw new Error("Something went wrong");
  };

  const handleCustomEventBtnClick = () => {
    Smartlook.track("custom-button-click", {});
  };

  return (
    <>
      <h1>It's testing time</h1>
      <Input placeholder="Lorem ipsum" />
      <Flex direction="row" gap="16px">
        <Button
          backgroundColor="#FEDB39"
          color="black"
          onClick={handleCustomEventBtnClick}
          id="custom-event-btn"
        >
          Custom event
        </Button>
        <Button
          backgroundColor="#D61C4E"
          color="white"
          onClick={handleThrowError}
          id="throw-an-error-btn"
        >
          Throw an Error
        </Button>
      </Flex>
    </>
  );
};
