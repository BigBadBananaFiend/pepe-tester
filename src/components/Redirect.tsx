import styled from "@emotion/styled";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const StyledRedirect = styled("div")`
  width: 80px;
  cursor: pointer;
`;

interface IRedirectProps {
  url: string;
  icon: string;
  children?: React.ReactNode;
  id?: string
}

export const Redirect: React.FC<IRedirectProps> = forwardRef<
  HTMLAnchorElement,
  IRedirectProps
>(({ url, children, icon, id }: IRedirectProps, ref) => {
  if (!!icon) {
    return (
      <Link to={url} ref={ref}>
        <StyledRedirect id={id}>
          <img width={"100%"} src={icon} alt="redirect"></img>
        </StyledRedirect>
      </Link>
    );
  }

  return (
    <Link ref={ref} to={url}>
      {children}
    </Link>
  );
});
