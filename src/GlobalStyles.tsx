import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyles = css`
  ${emotionReset}
  body, html, * {
    font-family: "Roboto", sans-serif;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.25;
  }
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }
`;
