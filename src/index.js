import React from "react";
import ReactDOM from "react-dom/client";

import App from "./presentation/container/app";

// styles
import "application/style/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
