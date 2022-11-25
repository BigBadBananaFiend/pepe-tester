import { useLocation } from "react-router-dom";
import { routes } from "../routes";

export const useCurrentStep = () => {
  const location = useLocation().pathname.split("/").pop();
  if (!location) return 0;
  return routes.indexOf(location);
};
