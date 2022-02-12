import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Moonetrica Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
ReactDOM.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <App />
    </VisionUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
