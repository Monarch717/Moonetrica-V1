/*!

Moonetrica Dashboard - v1.0.0

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Moonetrica Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <App />
    </VisionUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
