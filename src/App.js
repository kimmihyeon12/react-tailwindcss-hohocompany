import "./styles/index.css";

import { BrowserView, MobileView } from "react-device-detect";
import MobilePage from "./page/MobilePage";
import WebPage from "./page/WebPage";
const App = () => {
  return (
    <>
      <BrowserView>
        <WebPage />
      </BrowserView>
      <MobileView>
        <MobilePage />
      </MobileView>
    </>
  );
};

export default App;
