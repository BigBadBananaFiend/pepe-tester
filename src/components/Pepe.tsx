import { IPepeProps } from "./types";
import SadPepe from "../img/pepe.png";
import ExcitedPepe from "../img/excited.png";
import HappyPepe from "../img/happy.png";

export const Pepe: React.FC<IPepeProps> = ({ currentStep }: IPepeProps) => {
  let pepeVariant;
  switch (currentStep) {
    case 0:
      pepeVariant = SadPepe;
      break;
    case 1:
      pepeVariant = ExcitedPepe;
      break;
    case 2:
      pepeVariant = HappyPepe;
      break;
  }
  return <img src={pepeVariant} alt="pepe" width={"160px"} />;
};
