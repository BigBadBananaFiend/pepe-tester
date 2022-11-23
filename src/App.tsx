import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <AppRoutes />
    </>
  );
}

export default App;
