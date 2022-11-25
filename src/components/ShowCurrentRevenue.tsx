import { useContext } from "react";
import { CurrentRevenueContext } from "../Routes";

export const ShowCurrentRevenue: React.FC = () => {
  const revenueContext = useContext(CurrentRevenueContext);

  return (
    <p>
      Current revenue: <span>{revenueContext.revenue}</span>
    </p>
  );
};
