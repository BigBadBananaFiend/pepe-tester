import { IShowCurrentRevenueProps } from "./types";

export const ShowCurrentRevenue: React.FC<IShowCurrentRevenueProps> = ({
  currentRevenue,
}: IShowCurrentRevenueProps) => (
  <p>
    Current revenue: <span>{currentRevenue}</span>
  </p>
);
