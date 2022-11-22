import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./Routes";
import Smartlook from "smartlook-client";

function App() {
  Smartlook.init("32d0da1e0539830e04cee71dd9eaeb0fca8c04c1");

  return (
    <>
      <Global styles={GlobalStyles} />
      <AppRoutes />
    </>
  );
}

export default App;
