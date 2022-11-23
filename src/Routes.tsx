import { createContext, Dispatch, useReducer } from "react";
import {
  revenueReducer,
  RevenueState,
  RevenueAction,
} from "./revenue/revenueReducer";
import { AppWrapper } from "./components/Wrappers";
import { FirstStep, SecondStep, FinalStep } from "./pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// TODO: move context and reducer elsewhere, yolo it for now
const initRevenue = { revenue: 0 };

export const CurrentRevenueContext = createContext<RevenueState>(initRevenue);
export const DispatchIncreaseRevenueContext = createContext<
  Dispatch<RevenueAction>
>(() => {});

export const AppRoutes = () => {
  const [revenue, dispatch] = useReducer(revenueReducer, initRevenue);

  return (
    <>
      <AppWrapper>
        <CurrentRevenueContext.Provider value={revenue}>
          <DispatchIncreaseRevenueContext.Provider value={dispatch}>
            <Router>
              <Routes>
                <Route path={"/"} index element={<FirstStep />} />
                <Route path={"second-step"} index element={<SecondStep />} />
                <Route path={"final-step"} index element={<FinalStep />} />
              </Routes>
            </Router>
          </DispatchIncreaseRevenueContext.Provider>
        </CurrentRevenueContext.Provider>
      </AppWrapper>
    </>
  );
};
