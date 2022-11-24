import { useContext } from "react";
import { DispatchIncreaseRevenueContext } from "../Routes";
import { ActionTypes } from "../revenue/revenueReducer";
import styled from "@emotion/styled";
import Revenue from "../img/revenue.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Smartlook from "smartlook-client";

const StyledIcon = styled("img")`
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  width: 64px;
`;

const StyledTippy = styled(Tippy)`
  background-color: #fedb39;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

interface IRevenueButtonProps {
  revenueValue: string;
}

export const RevenueBtn: React.FC<IRevenueButtonProps> = ({
  revenueValue,
}: IRevenueButtonProps) => {
  const dispatch = useContext(DispatchIncreaseRevenueContext);

  const handleAddRevenue = () => {
    const revenueEventProps = {
      type: "revenueBtn",
      revenue: revenueValue,
    };
    Smartlook.track(
      `Revenue click worth ${revenueValue} USD`,
      revenueEventProps
    );
    dispatch({ type: ActionTypes.ADD, payload: Number(revenueValue) });
  };

  return (
    <StyledTippy
      content={`Add revenue of ${revenueValue}$`}
      placement={"bottom"}
    >
      <StyledIcon
        src={Revenue}
        alt="revenue"
        onClick={handleAddRevenue}
        id="revenue"
      />
    </StyledTippy>
  );
};
