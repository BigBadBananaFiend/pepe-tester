import { Outlet } from "react-router-dom";
import { ContentWrapper, RevenueBtn, ShowCurrentRevenue } from "../components";
import { Navigation } from "../components/Navigation";
import { Pepe } from "../components/Pepe";
import { useCurrentStep } from "./hooks/useCurrentStep";
import { CurrentRevenueContext } from "../Routes";
import { useContext } from "react";

export const StepWrapper: React.FC = () => {
  const currentStep = useCurrentStep();
  // lol
  const revenueValue =
    currentStep === 0 ? String(currentStep + 1 * 10) : String(currentStep * 10);

  const revenueContext = useContext(CurrentRevenueContext);

  return (
    <ContentWrapper alignItems="center" justifyContent="center">
      <RevenueBtn revenueValue={revenueValue} />
      <Pepe currentStep={currentStep} />
      <Outlet />
      <Navigation currentStep={currentStep} />
      <ShowCurrentRevenue currentRevenue={revenueContext.revenue} />
    </ContentWrapper>
  );
};
