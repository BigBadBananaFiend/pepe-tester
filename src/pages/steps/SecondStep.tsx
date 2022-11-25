import { Button, Flex } from "../../components";
import Smartlook from "smartlook-client";

export const SecondStep: React.FC = () => {
  const handleCustomButtonEventWithPropsClick = () => {
    Smartlook.track("custom-button-click-w-props", {
      name: "Event with props",
      description: "Event with props was triggered",
    });
  };

  return (
    <>
      <h1>We're almost there!</h1>
      <p style={{ cursor: "pointer" }}>Text to be clicked on!</p>
      <Flex direction="row" gap="20px">
        <Button
          backgroundColor="#FEDB39"
          color="black"
          onClick={handleCustomButtonEventWithPropsClick}
          id="custom-event-with-props-btn"
        >
          Custom event with props
        </Button>
      </Flex>
    </>
  );
};
