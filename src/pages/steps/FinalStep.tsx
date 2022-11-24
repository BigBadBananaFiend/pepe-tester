import { Button, Flex } from "../../components";
import { CurrentRevenueContext } from "../../Routes";
import Smartlook from "smartlook-client";
import { useContext } from "react";
import { DispatchIncreaseRevenueContext } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { ActionTypes } from "../../revenue/revenueReducer";

export const FinalStep: React.FC = () => {
  const revenueContext = useContext(CurrentRevenueContext);
  const dispatch = useContext(DispatchIncreaseRevenueContext);
  const navigate = useNavigate();

  const handleFinalizeRevenue = () => {
    const revenueEventProps = {
      type: "finalizeRevenue",
      revenue: revenueContext.revenue,
    };
    Smartlook.track("Finalize revenue", revenueEventProps);
    dispatch({ type: ActionTypes.SET, payload: 0 });
    navigate("/");
  };

  return (
    <>
      <h1>Well done!</h1>
      <Flex width="70%">
        <p style={{ textAlign: "center" }}>
          Now quickly click the 'Finalize revenue' event button or leave the
          page, so that Pepe can go to sleep for the next 24 hours to prepare
          for the next test run.
        </p>
      </Flex>
      <Button
        backgroundColor="#FEDB39"
        color="black"
        onClick={handleFinalizeRevenue}
        id="finalize-revenue"
      >
        Finalize revenue
      </Button>
    </>
  );
};
