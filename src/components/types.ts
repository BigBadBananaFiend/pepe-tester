import React from "react";

export interface IFlexContainerProps {
  direction?: "row" | "column";
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
}

export interface IShowCurrentRevenueProps {
  currentRevenue: number;
}

export interface IStepWrapperProps {
  revenueValue: string;
  pepeVariant: string;
  children: React.ReactNode;
}

export interface IInputProps {
  placeholder?: string;
}
