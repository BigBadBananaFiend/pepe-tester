import {
  Button,
  Redirect,
  ShowCurrentRevenue,
  StepWrapper,
} from "../components";
import { CurrentRevenueContext } from "../Routes";
import Pepe from "../img/happy.png";
import Backward from "../img/backward.png";
import Smartlook from "smartlook-client";
import { useContext } from "react";
import { DispatchIncreaseRevenueContext } from "../Routes";
import { useNavigate } from "react-router-dom";
import { ActionTypes } from "../revenue/revenueReducer";

export const FinalStep: React.FC = () => {
  const revenue = "30";
  const currentRevenue = useContext(CurrentRevenueContext);
  const dispatch = useContext(DispatchIncreaseRevenueContext);
  const navigate = useNavigate();

  const handleFinalizeRevenue = () => {
    const revenueEventProps = {
      type: "finalizeRevenue",
      revenue: currentRevenue.revenue,
    };
    Smartlook.track("Finalize revenue", revenueEventProps);
    dispatch({ type: ActionTypes.SET, payload: 0 });
    navigate("/");
  };

  return (
    <StepWrapper pepeVariant={Pepe} revenueValue={revenue}>
      <h1>Well done!</h1>
      <p style={{ textAlign: "center" }}>
        Now quickly click the 'Finalize revenue' event button or leave the page,
        so that Pepe can go to sleep for the next 24 hours to prepare for the
        next test run.
      </p>
      <Button isSuccess={true} onClick={handleFinalizeRevenue}>
        Finalize revenue
      </Button>
      <Redirect icon={Backward} url={"/second-step"} />
      <ShowCurrentRevenue currentRevenue={currentRevenue.revenue} />
    </StepWrapper>
  );
};
