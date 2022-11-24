export interface IFlexContainerProps {
  direction?: "row" | "column";
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
}

export interface IInputProps {
  placeholder?: string;
  name?: string;
  label?: string;
}

export interface IPepeProps {
  currentStep: number;
}

export interface IButtonProps {
  backgroundColor: string;
  color: string;
  onClick?: () => void;
}

export interface INavigationProps extends IPepeProps {}
