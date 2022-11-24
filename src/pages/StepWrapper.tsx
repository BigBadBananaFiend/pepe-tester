import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper, RevenueBtn, ShowCurrentRevenue } from "../components";
import { Navigation } from "../components/Navigation";
import { Pepe } from "../components/Pepe";
import { useCurrentStep } from "./hooks/useCurrentStep";

export const StepWrapper: React.FC = () => {
  const currentStep = useCurrentStep();
  // lol
  const revenueValue =
    currentStep === 0 ? String(currentStep + 1 * 10) : String(currentStep * 10);

  // basically just to trigger transition animation. there must be a better way to do this but yolo now
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const key = useMemo(() => Math.random(), [currentStep]);

  // i should probably just use the useCurrentStep hook inside of the components instead of prop drillin. will also fix later.
  return (
    <ContentWrapper alignItems="center" justifyContent="center" key={key}>
      <RevenueBtn revenueValue={revenueValue} />
      <Pepe currentStep={currentStep} />
      <Outlet />
      <Navigation currentStep={currentStep} />
      <ShowCurrentRevenue />
    </ContentWrapper>
  );
};
