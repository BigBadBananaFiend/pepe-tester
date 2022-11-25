import { Button } from "./Button";
import { INavigationProps } from "./types";
import { routes } from "../pages/routes";
import { useNavigate } from "react-router-dom";
import { Flex } from "./Flex";

export const Navigation: React.FC<INavigationProps> = ({
  currentStep,
}: INavigationProps) => {
  const navigate = useNavigate();
  const handleNavigate = (isForward: boolean) => {
    if (isForward) {
      return navigate(routes[currentStep + 1]);
    }

    return navigate(routes[currentStep - 1]);
  };
  return (
    <Flex direction="row" gap="20px">
      {currentStep !== 0 && (
        <Button
          backgroundColor="grey"
          color="white"
          id="back"
          onClick={() => handleNavigate(false)}
        >
          Back
        </Button>
      )}
      {currentStep !== 2 && (
        <Button
          backgroundColor="grey"
          color="white"
          id="next"
          onClick={() => handleNavigate(true)}
        >
          Next
        </Button>
      )}
    </Flex>
  );
};
